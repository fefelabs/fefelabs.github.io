import type { Metadata } from "next";
import ProjectDetailPage from "../project-detail-page";

export const metadata: Metadata = {
  title: "Magic Shades | fefe LABS",
  description: "Magic Shades is a relaxing puzzle game that becomes increasingly difficult as you play.",
};

export default function MagicShadesPage() {
  return (
    <ProjectDetailPage
      title="Magic Shades"
      subtitle="A relaxing puzzle game"
      description={[
        "The simple and relaxing game... that becomes increasingly difficult.",
        "Resist the longest and reach the top of the leaderboard.",
      ]}
      bulletTitle="How to play"
      bullets={[
        "Blocks will fall and stack.",
        "Click on any column to change the destination of the block.",
        "Stack blocks of the same color to create a darker color.",
        "If a row of blocks of the same color is formed, it will be erased.",
        "The game is over if a column reaches the top of the screen.",
      ]}
      banner="/portfolio/magic-shades/banner.png"
      screenshots={[
        "/portfolio/magic-shades/screen_01.png",
        "/portfolio/magic-shades/screen_02.png",
        "/portfolio/magic-shades/screen_03.png",
        "/portfolio/magic-shades/screen_04.png",
        "/portfolio/magic-shades/screen_05.png",
      ]}
      playStore="https://play.google.com/store/apps/details?id=com.keke.shades_game&gl=FR&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      secondaryAction={{ href: "https://tferrand.github.io/shades_game/", label: "Play online" }}
      privacyNotes={[
        "This game does not collect user data.",
        "This game only uses Google Play Games Services to save user scores and achievements.",
      ]}
    />
  );
}
