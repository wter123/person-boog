<template>
    <div class="Home">
 
    <div class="navbar navbar-fixed-top navbar-inverse" role="navigation">
      <div class="position1">
        <label class="font-type">个人博客</label>
      </div>
      <div class="position1">
        <label class="font-type">这是标题一</label>
      </div>
      <div class="position1">
        <label class="font-type">这是标题一</label>
      </div>
      <div class="position1">
        <label class="font-type">这是标题一</label>
      </div>
      <div class="position1">
        <label class="font-type"></label>
        <a href="/login">登录</a><span style="color:#337ab7">/</span><a href="/register">注册</a>
 
      </div>   
     </div> 
     <div style="height: 70px;width: 100%;">
       
     </div>
<!-- 侧滑菜单 -->
  <div id="wrapper">
        <div class="overlay"></div>
    
        <!-- Sidebar -->
        <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                       Bootstrap 3
                    </a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-fw fa-home"></i> Home</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-fw fa-folder"></i> 动漫</a>
                </li>
                <li>
                    <a href="./page/pan_sourch/pan.html"><i class="fa fa-fw fa-file-o"></i> 搜索资源引擎</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-fw fa-cog"></i> VIP视频</a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-fw fa-plus"></i> Dropdown <span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li class="dropdown-header">Dropdown heading</li>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
                <li>
                    <a href="#"><i class="fa fa-fw fa-bank"></i> Page four</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-fw fa-dropbox"></i> Page 5</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-fw fa-twitter"></i> Last page</a>
                </li>
                
            </ul>
        </nav>
        <!-- /#sidebar-wrapper -->
 
        <!-- Page Content -->
        <div id="page-content-wrapper">
          <button type="button" class="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas">
            <span class="hamb-top"></span>
            <span class="hamb-middle"></span>
            <span class="hamb-bottom"></span>
          </button>
 
   
        </div>
        <!-- /#page-content-wrapper -->
 
    </div>
    </div>
</template>


<script>$(document).ready(function() {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;
    trigger.click(function() {
        hamburger_cross();
    });
    function hamburger_cross() {
        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
    $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
    });
});

</script>


<style>
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/style.css";
</style>