import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AccordionLesson } from "./components/AccordionLesson";
import { AlertLesson } from "./components/AlertLesson";
import { AppbarLesson } from "./components/AppbarLesson";
import { AutoCompleteLesson } from "./components/AutoCompleteLesson";
import { AvatarLesson } from "./components/AvatarLesson";
import { BadgeLesson } from "./components/BadgeLesson";
import { BottomNavigationLesson } from "./components/BottomNavigationLesson";
import { BoxLesson } from "./components/BoxLesson";
import { BreadCrumbLesson } from "./components/BreadCrumbLesson";
import { ButtonLesson } from "./components/ButtonLesson";
import { CardLesson } from "./components/CardLesson";
import { CheckboxLesson } from "./components/CheckboxLesson";
import { DateRangeLesson } from "./components/DateRangeLesson";
import { DateTimeLesson } from "./components/DateTimeLesson";
import { DialogLesson } from "./components/DialogLesson";
import { DrawerLesson } from "./components/DrawerLesson";
import { GridLesson } from "./components/GridLesson";
import { ImageListLesson } from "./components/ImageListLesson";
import { LinkLesson } from "./components/LinkLesson";
import { ListLesson } from "./components/ListLesson";
import { LoadinButtonLesson } from "./components/LoadinButtonLesson";
import { MasonryLesson } from "./components/MasonryLesson";
import { PaperLesson } from "./components/PaperLesson";
import { ProgressLesson } from "./components/ProgressLesson";
import { RadioExampleLesson } from "./components/RadioExampleLesson";
import { RadioGroupLesson } from "./components/RadioGroupLesson";
import { SelectLesson } from "./components/SelectLesson";
import { SkeletonLesson } from "./components/SkeletonLesson";
import { SnackBarLesson } from "./components/SnackBarLesson";
import { SpeedDialLesson } from "./components/SpeedDialLesson";
import { StackLesson } from "./components/StackLesson";
import { TableLesson } from "./components/TableLesson";
import { TabsLesson } from "./components/TabsLesson";
import { TextFieldLesson } from "./components/TextFieldLesson";
import { TimeLineLesson } from "./components/TimeLineLesson";
import { ToolTipLesson } from "./components/ToolTipLesson";
import { LessonTypography } from "./components/TypographyLesson";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Button" element={<ButtonLesson />} />
        <Route path="/Typography" element={<LessonTypography />} />
        <Route path="/TextFieldLesson" element={<TextFieldLesson />} />
        <Route path="/RadioGroupLesson" element={<RadioGroupLesson />} />
        <Route path="/RadioExampleLesson" element={<RadioExampleLesson />} />
        <Route path="/SelectLesson" element={<SelectLesson />} />
        <Route path="/CheckboxLesson" element={<CheckboxLesson />} />
        <Route path="/AutoCompleteLesson" element={<AutoCompleteLesson />} />
        <Route path="/BoxLesson" element={<BoxLesson />} />
        <Route path="/StackLesson" element={<StackLesson />} />
        <Route path="/GridLesson" element={<GridLesson />} />
        <Route path="/CardLesson" element={<CardLesson />} />
        <Route path="/AccordionLesson" element={<AccordionLesson />} />
        <Route path="/AppbarLesson" element={<AppbarLesson />} />
        <Route path="/ImageListLesson" element={<ImageListLesson />} />
        <Route path="/PaperLesson" element={<PaperLesson />} />
        <Route path="/LinkLesson" element={<LinkLesson />} />
        <Route path="/BreadCrumbLesson" element={<BreadCrumbLesson />} />
        <Route path="/DrawerLesson" element={<DrawerLesson />} />
        <Route path="/BadgeLesson" element={<BadgeLesson />} />
        <Route path="/SpeedDialLesson" element={<SpeedDialLesson />} />
        <Route
          path="/BottomNavigationLesson"
          element={<BottomNavigationLesson />}
        />
        <Route path="/AvatarLesson" element={<AvatarLesson />} />
        <Route path="/ListLesson" element={<ListLesson />} />
        <Route path="/ToolTipLesson" element={<ToolTipLesson />} />
        <Route path="/AlertLesson" element={<AlertLesson />} />
        <Route path="/DialogLesson" element={<DialogLesson />} />
        <Route path="/SnackBarLesson" element={<SnackBarLesson />} />
        <Route path="/ProgressLesson" element={<ProgressLesson />} />
        <Route path="/SkeletonLesson" element={<SkeletonLesson />} />
        <Route path="/LoadinButtonLesson" element={<LoadinButtonLesson />} />
        <Route path="/TableLesson" element={<TableLesson />} />
        <Route path="/DateTimeLesson" element={<DateTimeLesson />} />
        <Route path="/DateRangeLesson" element={<DateRangeLesson />} />
        <Route path="/TabsLesson" element={<TabsLesson />} />
        <Route path="/MasonryLesson" element={<MasonryLesson />} />
        <Route path="/TimeLineLesson" element={<TimeLineLesson />} />
      </Routes>
    </>
  );
}

export default App;
