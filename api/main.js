import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import users from "../data/users.json" assert { type:"json"}
import universidade from "../data/universidade.json" assert { type:"json"}

const router = new Router()

router.get("/",(context)=>{
    context.response.body="welcome"
})


router.get("/api",(context)=>{
    context.response.body=users, universidade;
})

router.get("/api/users",(context)=>{
    context.response.body=users
})

router.get("/api/universidade",(context)=>{
    context.response.body=universidade
})

const app = new Application()
app.use(oakCors()); 
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

