import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
export const Home = () => {
  return (
    <>
      {/* <Link to="/">Ana Sayfa</Link> */}
      <Stack direction={"row"} spacing={3} flexWrap={"wrap"} useFlexGap>
        <Link to="/Button">Button Lesson</Link>
        <Link to="/Typography">Typography Lesson</Link>
        <Link to="/TextFieldLesson">TextField Lesson</Link>
        <Link to="/RadioGroupLesson">RadioGroup Lesson</Link>
        <Link to="/RadioExampleLesson">RadioExample Lesson</Link>
        <Link to="/SelectLesson">Select Lesson</Link>
        <Link to="/CheckboxLesson">Checkbox Lesson</Link>
        <Link to="/AutoCompleteLesson">AutoComplete Lesson</Link>
        <Link to="/BoxLesson">Box Lesson</Link>
        <Link to="/StackLesson">Stack Lesson</Link>
        <Link to="/GridLesson">Grid Lesson</Link>
        <Link to="/CardLesson">Card Lesson</Link>
        <Link to="/AccordionLesson">Accordion Lesson</Link>
        <Link to="/AppbarLesson">Appbar Lesson</Link>
        <Link to="/ImageListLesson">ImageList Lesson</Link>
        <Link to="/PaperLesson">Paper Lesson</Link>
        <Link to="/LinkLesson">Link Lesson</Link>
        <Link to="/BreadCrumbLesson">BreadCrumb Lesson</Link>
        <Link to="/DrawerLesson">Drawer Lesson</Link>
        <Link to="/BadgeLesson">Badge Lesson</Link>
        <Link to="/SpeedDialLesson">SpeedDial Lesson</Link>
        <Link to="/BottomNavigationLesson">BottomNavigation Lesson</Link>
        <Link to="/AvatarLesson">Avatar Lesson</Link>
        <Link to="/ListLesson">List Lesson</Link>
        <Link to="/ToolTipLesson">ToolTip Lesson</Link>
        <Link to="/AlertLesson">AlertLesson</Link>
        <Link to="/DialogLesson">Dialog Lesson</Link>
        <Link to="/SnackBarLesson">SnackBar Lesson</Link>
        <Link to="/ProgressLesson">Progress Lesson</Link>
        <Link to="/SkeletonLesson">Skeleton Lesson</Link>
        <Link to="/LoadinButtonLesson">Loadin ButtonLesson</Link>
        <Link to="/TableLesson">Table Lesson</Link>
        <Link to="/DateTimeLesson">DateTime Lesson</Link>
        <Link to="/DateRangeLesson">DateRange Lesson</Link>
        <Link to="/TabsLesson">Tabs Lesson</Link>
        <Link to="/MasonryLesson">Masonry Lesson</Link>
        <Link to="/TimeLineLesson">TimeLine Lesson</Link>
      </Stack>
    </>
  );
};
