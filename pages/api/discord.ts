import { Client, GatewayIntentBits } from "discord.js";
import { NextApiHandler } from "next";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

const handler: NextApiHandler<{ count: string }> = async (req, res) => {
  try {
    await client.login(process.env.NODE_DISCORD_BOT_TOKEN);
    const guild = client.guilds.cache.get("822259948586270770");
    // this is an expensive operation, skip for now
    // difference is it filters out bots, but there aren't that many in our server
    // const members = await guild?.members.fetch();
    // const guildMemberCount = members?.filter((member) => !member.user.bot).size;
    res.status(200).json({
      count: `${guild?.memberCount || ""}`,
    });
  } catch {
    res.status(200).json({
      count: "",
    });
  }
};

export default handler;
