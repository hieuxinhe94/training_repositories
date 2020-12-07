export class BaseResponseModel {

}


export enum EntityStatus {
  NotExists = 1,
  Exist = 2,
  JustCreated = 3,
  ExistsButInActive = 4,
  UnKnown = 5
}


export enum ServiceResponeCode {
  OK = 1,
  PENNDING = 2,
  ERROR = 3,
  NOT_FOUND = 4,
  INVALID = 5,
  EXISTED = 6
}
