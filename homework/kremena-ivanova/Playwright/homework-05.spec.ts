//npx playwright test --reporter=html
import { expect, test, Page, Locator } from '@playwright/test';

const baseUrl = 'https://pragmatic.bg/';

// HOME PAGE
class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly coursesButton: Locator;
  readonly coursesPanel: Locator;
  readonly tsPlCourseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('header').getByRole('link', { name: 'Pragmatic LLC' });
    this.coursesButton = page.getByRole('link', { name: 'Курсове' });
    this.coursesPanel = page.locator('nav#main-menu .megamenu-child-container'); //Really hard to inspect this blinking panel! :)
    this.tsPlCourseButton = page.getByRole('link', {
      name: 'Автоматизирано Тестване с Playwright и TypeScript',
    });
  }
}

// COURSES PAGE
class CoursesPage {
  readonly page: Page;
  readonly titleCourse: Locator;
  readonly lecture11Link: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleCourse = page.getByRole('heading', {
      level: 3,
      name: 'Автоматизирано Тестване с Playwright и TypeScript',
    });
    this.lecture11Link = page.getByRole('link', { name: 'Въведение в Playwright' });
  }
}

// LECTURE 11 PAGE
class LectureIntroPage {
  readonly page: Page;
  readonly lectureTitle: Locator;
  readonly lecture11ContentItem1: Locator;
  readonly lecture11ContentItem2: Locator;

  constructor(page: Page) {
    this.page = page;

    this.lectureTitle = page.getByRole('heading', {
      level: 2,
      name: 'Въведение в Playwright',
    });
    this.lecture11ContentItem1 = page.getByText('Какво представлява Playwright', { exact: false });
    this.lecture11ContentItem2 = page.getByText('Инсталиране и конфигуриране на Playwright.', {
      exact: true,
    });
  }
}

test('[HW5.1] Access home-page and check logo', async ({ page }) => {
  const home = new HomePage(page);

  await page.goto(baseUrl);
  await expect(home.logo).toBeVisible();
  await home.coursesButton.hover();
  await expect(home.coursesPanel).toBeVisible();
});

test('[HW5.2] Navigate to TypeScript|Playwright course and open Lecture 11', async ({ page }) => {
  const home = new HomePage(page);
  const courses = new CoursesPage(page);
  const lectureIntro = new LectureIntroPage(page);

  await page.goto(baseUrl);
  await home.tsPlCourseButton.click();
  await expect(courses.titleCourse).toBeVisible();
  await courses.lecture11Link.click();
  await expect(page).toHaveURL(/lessons\/.*playwright/);
  await expect(lectureIntro.lecture11ContentItem1).toBeVisible();
  await expect(lectureIntro.lecture11ContentItem2).toBeVisible();
});
