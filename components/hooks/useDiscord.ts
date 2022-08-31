import { useState, useEffect, useCallback } from "react";

export const useDiscordCount = (): { memberCount: string } => {
  const [memberCount, setMemberCount] = useState("0");
  const fetchMemberCount = useCallback(async () => {
    const res = await fetch("/api/discord");
    const json = await res.json();
    setMemberCount(json.count);
  }, []);

  useEffect(() => {
    fetchMemberCount();
  }, [fetchMemberCount]);

  return { memberCount };
};
