<template>
  <div class="about">
    <el-container style="height: 100%;">
      <el-menu
        :default-openeds="['1', '2']"
        id="left_navigation_bar"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        router
      >
        <el-header id="left_top">
          <img src="../assets/favicon.png" alt />
          <span v-show="!isCollapse">智学无忧教育</span>
        </el-header>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">在线测试</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="item.url"
              v-for="(item,index) in  menu.baserouter"
              :key="index"
              @click="addTab(item.name)"
            >{{item.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">基础信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :index="item.url"
              v-for="(item,index) in menu.testrouter"
              :key="index"
            >{{item.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-container>
        <el-header style="font-size: 12px">
          <el-radio-group class="left_text">
            <p
              @click="left_shrink"
              class="el-icon-caret-left"
              id="left_click"
              :collapse="left_click"
            ></p>
          </el-radio-group>
          <el-tabs
            v-model="editableTabsValue"
            type="card"
            closable
            @tab-remove="removeTab"
            @tab-click="top_navigation_bar()"
          >
            <el-tab-pane
              v-for="(item, index) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            ></el-tab-pane>
          </el-tabs>
          <div id="right_quit">
            <el-dropdown>
              <i class="el-icon-s-custom" style="margin-right: 5px;"></i>
              <span>退出</span>
            </el-dropdown>
            <el-row class="demo-avatar demo-basic">
              <el-col :span="12">
                <div class="demo-basic--circle">
                  <div class="block">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      isCollapse: false,
      left_click: true,
      menu: {
        baserouter: [
          {
            name: "班级管理",
            url: "/ClassManage"
          },
          {
            name: "学生管理",
            url: "/ModifyPassword"
          },
          {
            name: "老师管理",
            url: "/StudentManage"
          },
          {
            name: "修改密码",
            url: "/TeacherManage"
          }
        ],
        testrouter: [
          {
            name: "试卷管理",
            url: "/MakeTestPaper"
          },
          {
            name: "老师出卷",
            url: "/TestPaperManage"
          },
          {
            name: "安排测试",
            url: "/TestResult"
          },
          {
            name: "批阅测试",
            url: "/TestSetter"
          },
          {
            name: "测试成绩",
            url: "/ViewTestPaper"
          }
        ]
      },
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "首页",
          name: "1"
        }
      ],
      tabIndex: 1
    };
  },
  methods: {
    left_shrink() {
      var left_click = this.left_click;
      if (left_click == true) {
        document
          .getElementById("left_click")
          .setAttribute("class", "el-icon-caret-right");
        this.left_click = false;
      } else if (left_click == false) {
        document
          .getElementById("left_click")
          .setAttribute("class", "el-icon-caret-left");
        this.left_click = true;
      }
      var adas = this.isCollapse;
      if (adas == true) {
        this.isCollapse = false;
      } else if (adas == false) {
        this.isCollapse = true;
      }
    },
    asdasdsa() {
      this.$router.push("");
    },
    addTab(name, url) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: name,
        path: url,
        name: newTabName
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    },
    top_navigation_bar() {
      alert();
    }
  }
};
</script>


<style scoped>
body,
p {
  margin: 0px;
}
#left_top {
  background: #ffeb3a;
  color: #008080;
  font-size: 1rem;
  padding-left: 20px;
}
#left_top img {
  width: 30px;
  vertical-align: middle;
  box-shadow: 0 0 20px #018181;
  border-radius: 50%;
  margin-right: 1rem;
}
.el-header {
  background-color: white;
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #eef1f6;
  padding-left: 0px;
}
.block {
  margin-top: 4px;
  margin-left: 1rem;
}
.el-aside {
  color: #333;
}
.imgs_user .el-icon-s-custom {
  color: white;
  font-size: 1.8rem;
  margin-left: 7px;
}
.el-icon-caret-left,
.el-icon-caret-right {
  font-size: 1.5rem;
  color: white;
}
.left_text {
  height: 100%;
  background: #018181;
  float: left;
}
.left_text p {
  float: left;
  margin-top: 15px;
}
.el-icon-menu {
  color: white;
}
.el-tabs,
.el-tabs--card,
.el-tabs--top {
  width: 85%;
  float: left;
}
#right_quit {
  width: 100px;
  float: right;
}
.el-dropdown {
  float: left;
}
</style>
