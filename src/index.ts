import { MikroORM } from "@mikro-orm/core";
import express from "express";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  await orm.getMigrator().up();

  const app = express();
};

main().catch((err) => {
  console.log(err);
});

console.log("hello there");

// const post = orm.em.create(Post, { title: "my first post" });

// await orm.em.persistAndFlush(post);

// const posts = await orm.em.find(Post, {});
// console.log(posts);
