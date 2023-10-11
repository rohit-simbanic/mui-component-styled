import ButtonComponent from "./component/button";
import PopupCard from "./component/popup";
import BreadcrumbComponent from "./component/breadcrumb";
import FooterComponent from "./component/footer";
import MenuComponent from "./component/menu";
import PaginationComponent from "./component/pagination";
import AlertComponent from "./component/alert";
import RatingComponent from "./component/rating";

export default function Home() {
  return (
    <main>
      <ButtonComponent />
      <PopupCard />
      <BreadcrumbComponent />
      <FooterComponent />
      <MenuComponent />
      <PaginationComponent />
      <AlertComponent />
      <RatingComponent />
    </main>
  );
}
