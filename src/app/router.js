import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../features/home/HomePage.vue";
import AboutPage from "../features/about/AboutPage.vue";
import BranchPage from "../features/branches/BranchPage.vue";
import CoursePage from "../features/courses/CoursePage.vue";
import CampaignCoursePage from "../features/courses/CampaignCoursePage.vue";
import NewsCategoryPage from "../features/news/NewsCategoryPage.vue";
import ColumnCategoryPage from "../features/students/ColumnCategoryPage.vue";
import AchievementPage from "../features/achievements/AchievementPage.vue";
import ContactPage from "../features/contact/ContactPage.vue";

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
