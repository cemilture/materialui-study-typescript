import { Breadcrumbs, Link } from "@mui/material";

export const BreadCrumbLesson = () => {
  return (
    <Breadcrumbs separator="&" maxItems={3}>
      <Link href="/" underline="hover">
        Anasayfa
      </Link>
      <Link href="/" underline="hover">
        Hakkımızda
      </Link>
      <Link href="/" underline="hover">
        Ürünler
      </Link>
      <Link href="/" underline="hover">
        İletişim
      </Link>
      <Link href="/" underline="hover">
        Cemil Türe
      </Link>
      <Link href="/" underline="hover">
        Frontend
      </Link>
    </Breadcrumbs>
  );
};
