import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import BranchPage from "../pages/BranchPage.vue";
import CoursePage from "../pages/CoursePage.vue";
import CampaignCoursePage from "../pages/CampaignCoursePage.vue";
import NewsCategoryPage from "../pages/NewsCategoryPage.vue";
import ColumnCategoryPage from "../pages/ColumnCategoryPage.vue";
import AchievementPage from "../pages/AchievementPage.vue";
import ContactPage from "../pages/ContactPage.vue";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 96,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  },
  routes: [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/branches", redirect: "/branches/minghu" },
    { path: "/branches/:branchId", component: BranchPage },
    { path: "/courses", redirect: "/courses/elementary" },
    { path: "/courses/:stageId/:courseId", component: CampaignCoursePage },
    { path: "/courses/:stageId", component: CoursePage },
    { path: "/news", redirect: "/news/elementary" },
    { path: "/news/:sectionId", component: NewsCategoryPage },
    { path: "/students", redirect: "/students/learning-methods" },
    { path: "/students/:columnId", component: ColumnCategoryPage },
    { path: "/achievements", redirect: "/achievements/honors" },
    { path: "/achievements/:achievementId", component: AchievementPage },
    { path: "/contact", component: ContactPage },
  ],
});
