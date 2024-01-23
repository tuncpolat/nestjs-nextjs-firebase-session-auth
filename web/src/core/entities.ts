type Distinct<DistinctName, T> = T & { __TYPE__: DistinctName };

export type MongoId = Distinct<"MongoId", string>;
export type UID = Distinct<"UID", string>;

export type Auth = {
  uid: UID;
  email: string;
};

export type Lessor = {
  id: MongoId;
  uid: UID;
  email: string;
};

export type SuccessResponse = {
  status: "success";
};
