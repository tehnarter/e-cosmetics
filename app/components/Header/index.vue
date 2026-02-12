<script setup lang="ts">
const data = [
  {
    id: 1,
    label: "Магазин",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Догляд за обличчям",
        url: "/shop#face-care",
        description:
          "Креми, сироватки, очищення — все для здорової та сяючої шкіри",
      },
      {
        id: 12,
        label: "Догляд за волоссям",
        url: "/shop#hair-care",
        description: "Професійні шампуні, бальзами, маски та засоби стайлінгу",
      },
      {
        id: 13,
        label: "Макіяж",
        url: "/shop#makeup",
        description:
          "Тональні засоби, помади, тіні та інша декоративна косметика",
      },
      {
        id: 14,
        label: "Догляд за тілом",
        url: "/shop#body-care",
        description: "Лосьйони, скраби, гелі та засоби для щоденного догляду",
      },
      {
        id: 15,
        label: "Аромати",
        url: "/shop#perfumes",
        description: "Жіночі та чоловічі парфуми на будь-який смак",
      },
    ],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "Знижки",
    url: "/shop#on-sale",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "Новинки",
    url: "/shop#new-arrivals",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Бренди",
    url: "/shop#brands",
    children: [],
  },
]
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__inner">
        <!-- LEFT -->
        <div class="left-group">
          <div class="mobile-burger">
            <HeaderResTopNavbar :data="data" />
          </div>

          <NuxtLink to="/" class="logo-text"> COSMETICS </NuxtLink>
        </div>

        <!-- NAVIGATION -->
        <UiNavigationMenu class="desktop-nav">
          <UiNavigationMenuList>
            <ul class="nav-items">
              <li v-for="item in data" :key="item.id">
                <HeaderMenuItem
                  v-if="item.type === 'MenuItem'"
                  :label="item.label"
                  :url="item.url"
                />

                <HeaderMenuList
                  v-else
                  :label="item.label"
                  :data="item.children"
                />
              </li>
            </ul>
          </UiNavigationMenuList>
        </UiNavigationMenu>

        <!-- SEARCH -->
        <div class="desktop-search">
          <SvgoSearch filled />
          <input type="search" placeholder="Пошук продуктів..." />
        </div>

        <!-- RIGHT -->
        <div class="right-group">
          <NuxtLink to="/search" class="mobile-search">
            <SvgoSearchblack class="mobile-search__svg" />
          </NuxtLink>
          <LanguageSwitcher />
          <ThemeSwitcher />
          <HeaderCartBtn />

          <NuxtLink to="/#signin">
            <SvgoUser class="icons-user" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 20;

  .header__inner {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 20px 16px;

    @media (min-width: 768px) {
      padding: 24px 16px;
      flex-direction: row;
    }
  }
}

/* LEFT PART */
.left-group {
  display: flex;
  align-items: center;
}

.mobile-burger {
  display: block;
  margin-right: 14px;

  @media (min-width: 768px) {
    display: none;
  }
}

.logo-text {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 6px;
  margin-right: 10px;
}

/* NAVIGATION */
.desktop-nav {
  display: none;

  @media (min-width: 768px) {
    display: flex;
    margin-right: 14px;

    @media (min-width: 1024px) {
      margin-right: 28px;
    }
  }
}

.nav-items {
  display: flex;
  gap: 24px;
  align-items: center;
}

/* DESKTOP SEARCH */
.desktop-search {
  display: none;
  color: #999;

  @media (min-width: 768px) {
    display: flex;
    column-gap: 0.75rem;
    background: #f0f0f0;
    border-radius: 6px;
    padding: 6px 10px;
    margin-right: 20px;

    @media (min-width: 1024px) {
      margin-right: 40px; // == lg:mr-10
    }

    img {
      width: 20px;
      height: 20px;
      margin-right: 6px;
    }

    input {
      border: none;
      outline: none;
      background: transparent;
    }
  }
}

/* RIGHT PART */
.right-group {
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 22px;
    height: 22px;
  }
}

/* MOBILE SEARCH */
.mobile-search {
  display: block;
  padding: 4px;
  &__svg {
    width: 22px;
    height: 22px;
  }

  @media (min-width: 768px) {
    display: none;
  }
}
.icons-user {
  width: 22px;
  height: 22px;
  &:hover {
    color: var(--hover-color);
  }
}
</style>
