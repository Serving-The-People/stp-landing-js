import { Client, GatewayIntentBits } from "discord.js";
import { NextApiHandler } from "next";
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

const loginPromise = client.login(process.env.NODE_DISCORD_BOT_TOKEN);

const handler: NextApiHandler<{ count: string }> = async (req, res) => {
  await loginPromise;
  const guild = client.guilds.cache.get("822259948586270770");
  const members = await guild?.members.fetch();
  const guildMemberCount = members?.filter((member) => !member.user.bot).size;
  res.status(200).json({
    count: `${guildMemberCount}`,
  });
};

export default handler;
