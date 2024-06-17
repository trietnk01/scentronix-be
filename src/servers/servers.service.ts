import { Injectable } from "@nestjs/common";
import axios from "axios";
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
    let draftData = [];
    const serverData = await this.serversModel.find({});
    for (var i = 0; i < serverData.length; i++) {
      await axios({
        method: "GET",
        url: serverData[i].url,
        responseType: "stream"
      })
        .then((res) => {
          draftData.push(serverData[i]);
        })
        .catch((e) => {
          console.log("e.message = ", e.message);
        });
    }
    let minItem = draftData[0];
    for (var j = 1; j < draftData.length; j++) {
      if (parseInt(draftData[j].priority) < parseInt(minItem.priority)) {
        minItem = draftData[j];
      }
    }
    item = minItem;
    return {
      item
    };
  };
}
