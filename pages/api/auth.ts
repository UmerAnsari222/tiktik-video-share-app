import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../utils/client";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    client
      .createIfNotExists(req.body)
      .then(() => {
        res.status(200).json("Login success");
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
}
