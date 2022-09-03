import { Telegraf } from "telegraf";

const bot = new Telegraf("5639268501:AAE7wTZjdPnrRsJOcedbV3IFYIFtCi-kdkw");

bot.on("message", (ctx) => {
  ctx.reply("Ciao, sono un bot molto stupido!");
});

bot.launch();