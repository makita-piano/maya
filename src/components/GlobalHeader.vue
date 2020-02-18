<template>
  <header>
    <div class="grid-center col-12 margin-top-1">
        <RouterLink to="/" id="home" style="z-index: 9999">
            <img src="music_piano.png" width="48px" height="48px" style="background-color: white;border-radius: 3rem;padding: .3rem;margin: .5rem 0;vertical-align: middle;box-sizing: content-box" alt="piano">
        </RouterLink>
    </div>
    <div class="grid display-none-mobile menu">
        <div class="col-3">
            <RouterLink to="/profile">
                <div class="col-12">
                    プロフィール
                </div>
                <div class="col-12">
                    Profile
                </div>
            </RouterLink>
        </div>
        <div class="col-3">
            <RouterLink to="/information">
                <div class="col-12">
                    お知らせ
                </div>
                <div class="col-12">
                    Information
                </div>
            </RouterLink>
        </div>
        <div class="col-3">
            <RouterLink to="/discography">
                <div class="col-12">
                    ディスコグラフィー
                </div>
                <div class="col-12">
                    Discography
                </div>
            </RouterLink>
        </div>
        <div class="col-3">
            <RouterLink to="/contact">
                <div class="col-12">
                    お問い合わせ
                </div>
                <div class="col-12">
                    Contact
                </div>
            </RouterLink>
        </div>
    </div>
    <nav class="menu-container display-none-pc">
        <ul class="menu">
            <li class="menu-item">
                <RouterLink to="/profile">
                    <div class="col-12">
                        プロフィール
                    </div>
                    <div class="col-12">
                        Profile
                    </div>
                </RouterLink>
            </li>
            <li class="menu-item">
                <RouterLink to="/information">
                    <div class="col-12">
                        お知らせ
                    </div>
                    <div class="col-12">
                        Information
                    </div>
                </RouterLink>
            </li>
            <li class="menu-item">
                <RouterLink to="/discography">
                    <div class="col-12">
                        ディスコグラフィー
                    </div>
                    <div class="col-12">
                        Discography
                    </div>
                </RouterLink>
            </li>
            <li class="menu-item">
                <RouterLink to="/contact">
                    <div class="col-12">
                        お問い合わせ
                    </div>
                    <div class="col-12">
                        Contact
                    </div>
                </RouterLink>
            </li>
        </ul>
        <div class="menu-trigger display-none-pc">
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span class="menu-text">menu</span>
            </div>
        </div>
    </nav>
  </header>
</template>


