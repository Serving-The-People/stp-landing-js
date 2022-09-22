import { NextApiHandler } from "next";

const handler: NextApiHandler<{ count: string }> = async (req, res) => {
  try {
    const discordRes = await fetch(
      `https://discord.com/api/guilds/822259948586270770?with_counts=true`,
      {
        headers: { Authorization: `Bot ${process.env.NODE_DISCORD_BOT_TOKEN}` },
      }
    );
    const json = await discordRes.json();
    res.status(200).json({
      count: `${json.approximate_member_count || ""}`,
    });
  } catch {
    res.status(200).json({ count: "" });
  }
};

export default handler;
