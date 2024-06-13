import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Request } from "express";
import * as fs from "fs";
import { FileUpload } from "graphql-upload-ts";
import { Model } from "mongoose";
import { join } from "path";
import { v4 as uuid } from "uuid";
import { ServersMongoose } from "./schemas/servers.schema";

@Injectable()
export class ServersService {
  constructor(@InjectModel(ServersMongoose.name) private serversModel: Model<ServersMongoose>) {}
  findServerLowestPriority = async () => {
    let status: boolean = true;
    let message: string = "";
    let list = null;
    let item = null;
    try {
      list = await this.serversModel.aggregate([
        {
          $sort: {
            priority: 1
          }
        }
      ]);
      if (list && list.length > 0) {
        item = list[0];
      }
    } catch (err) {
      status = false;
      message = err.message;
    }
    return {
      status,
      message,
      item
    };
  };
  findAll = async () => {
    let status: boolean = true;
    let message: string = "";
    let list = null;
    try {
      list = await this.serversModel.find({});
    } catch (err) {
      status = false;
      message = err.message;
    }
    return {
      status,
      message,
      list
    };
  };
}
