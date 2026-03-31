import type { Metadata } from "next";
import ProjectDetailPage from "../project-detail-page";

export const metadata: Metadata = {
  title: "Velib' Now | fefe LABS",
  description: "Velib' Now helps riders quickly find available bikes and stations across Greater Paris.",
};

export default function VelibNowPage() {
  return (
    <ProjectDetailPage
      title="Velib' Now !"
      subtitle="Trouve le Velib' ou la borne qu'il te faut !"
      description={[
        "Cette application localise les Velib' ou bornes de stationnement disponibles les plus proche de votre position.",
        "Vélib’ Métropole, ce sont près de 1 400 stations réparties sur 55 communes du Grand Paris et près de 400 km² desservis, soit le plus grand service de vélos partagés au monde incluant des vélos électriques rechargeables en station.",
      ]}
      banner="/portfolio/velib-now/banner.png"
      screenshots={[
        "/portfolio/velib-now/PlayStore_01.png",
        "/portfolio/velib-now/PlayStore_02.png",
        "/portfolio/velib-now/PlayStore_03.png",
        "/portfolio/velib-now/PlayStore_04.png",
      ]}
      playStore="https://play.google.com/store/apps/details?id=com.keke.velib_now"
    />
  );
}
