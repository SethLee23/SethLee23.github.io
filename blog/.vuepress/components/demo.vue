<template>
  <div class="edit">
    <div class="border-bottom-shadow">
      <SearchBar />
    </div>
    <div class="edit-main">
      <div class="mg-lt53 flex flex-ac color-888 ft-14">
        <div @click="$router.go(-1)">内容管理</div>
        <i class="el-icon-arrow-right mg-lr10"></i>
        <div>编辑</div>
      </div>
      <div class="components-container bg-orange">
        <div>
          <ul>
            <li>
              <div class="left">发布类型：</div>
              <div class="right">
                <el-radio v-model="radio" label="1" class="el-label">公告</el-radio>
                <el-radio v-model="radio" label="2" class="el-label">新闻</el-radio>
              </div>
            </li>
            <li>
              <div class="left">发布标题：</div>
              <div class="right">
                <el-input v-model="title" placeholder="请添加标题" class="el-input-custom"></el-input>
              </div>
            </li>
          </ul>
          <tinymce v-model="content" :height="300" />

          <quill-editor ref="myQuillEditor" v-model="content" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)" />
        </div>
        <div class="flex flex-jc">
          <button class="submit-btn color-fff ft-14" :class="{'red-btn': canSubmit}" @click="submit">提交</button>
        </div>
      </div>

    </div>
  </div>
</template>
  <script>
import Quill from "quill"; //引入编辑器
import Tinymce from "@/components/Tinymce";
// import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module';

// Quill.register('modules/ImageExtend', ImageExtend);
var fonts = [
  "Microsoft-YaHei",
  "SimSun",
  "SimHei",
  "KaiTi",
  "Arial",
  "monospace",
];
var Font = Quill.import("formats/font");
Font.whitelist = fonts; //将字体加入到白名单
// import imageResize from 'quill-image-drop-module';
// Quill.register('modules/imageResize', imageResize);
import $ from "jquery";
import Vue from "vue";
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
  ["blockquote", "code-block"], // 引用  代码块-----['blockquote', 'code-block']
  [{ header: 1 }, { header: 2 }], // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
  [{ list: "ordered" }, { list: "bullet" }], // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
  [{ script: "sub" }, { script: "super" }], // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
  [{ indent: "-1" }, { indent: "+1" }], // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
  [{ direction: "rtl" }], // 文本方向-----[{'direction': 'rtl'}]
  [{ size: ["small", false, "large", "huge"] }], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
  // [{ font: ['Arial', 'serif', 'sans-serif', '宋体', '黑体', 'Microsoft YaHei', 'monospace', 'cursive'] }], // 字体种类-----[{ font: [] }]
  [{ align: [] }], // 对齐方式-----[{ align: [] }]
  ["clean"], // 清除文本格式-----['clean']
  [{ font: fonts }],
  ["image"], // 链接、图片、视频-----['link', 'image', 'video']
];
function imageHandler(value) {
  var fileInput = this.container.querySelector("input.ql-image[type=file]");
  let self = this;
  if (fileInput == null) {
    fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("accept", "image/*");
    fileInput.classList.add("ql-image");
    fileInput.addEventListener("change", function () {
      if (fileInput.files != null && fileInput.files[0] != null) {
        var formData = new FormData();
        formData.append("file", fileInput.files[0]);
        const loading = Vue.prototype.$loading({
          background: "rgba(0,0,0,0.3)",
          fullscreen: true,
          target: ".page",
          spinner: "el-icon-loading",
        });
        $.ajax({
          url:
            "https://www.fastmock.site/mock/cb2d22828bd0e5396a2a41a1ed8e299b/imageMock",
          type: "POST",
          data: formData,
          processData: false,
          contentType: false,
          success: function (data) {
            loading.close();
            self.quill.insertEmbed(
              self.quill.getSelection().index,
              "image",
              "https://t.live.cntv.cn/cntvwebplay/cntvplayer/images/plug-in_bg.gif"
            );
          },
          fail: function (data) {
            console.log("fail: ");
          },
        });
      }
    });
    this.container.appendChild(fileInput);
  }
  fileInput.click();
}
export default {
  name: "edit",
  data() {
    return {
      // content: '',
      radio: "",
      input: "",
      title: "",
      content: "<h2>I am Example</h2>",
      editorOption: {
        // Some Quill options...
        placeholder: "请输入文本...",
        theme: "snow",
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              // console.log(this)
              image: function (val) {
                const bindHandler = imageHandler.bind(this, val);
                bindHandler();
              },
              // image: function (value) {
              //   var fileInput = this.container.querySelector('input.ql-image[type=file]');
              //   console.log('this.container: ', this.container);
              //   console.log('this: ', this);
              //   let self = this;
              //   console.log('this.image trigger', 'fileInput', fileInput);
              //   if (fileInput == null) {
              //     fileInput = document.createElement('input');
              //     fileInput.setAttribute('type', 'file');
              //     fileInput.setAttribute('accept', 'image/*');
              //     fileInput.classList.add('ql-image');
              //     fileInput.addEventListener('change', function () {
              //       if (fileInput.files != null && fileInput.files[0] != null) {
              //         var formData = new FormData();
              //         formData.append('file', fileInput.files[0]);
              //         $.ajax({
              //           url: 'https://www.fastmock.site/mock/cb2d22828bd0e5396a2a41a1ed8e299b/imageMock',
              //           type: 'POST',
              //           data: formData,
              //           processData: false,
              //           contentType: false,
              //           success: function (data) {
              //             self.quill.insertEmbed(self.quill.getSelection().index, 'image', 'https://t.live.cntv.cn/cntvwebplay/cntvplayer/images/plug-in_bg.gif');
              //           },
              //           fail: function (data) {
              //             console.log('fail: ');

              //           }
              //         });
              //       }
              //     });
              //     this.container.appendChild(fileInput);
              //   }
              //   fileInput.click();
              // },
            },
          },
          imageResize: {}, // 配置图片可缩放大小
        },
      },
    };
  },
  components: { Tinymce },
  computed: {
    canSubmit() {
      return this.content && this.title && this.radio;
    },
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
  methods: {
    submit() {
      console.log("this.content", this.content);
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
  },
};
</script>
  <style>
/* .ql-container {
  min-height: 400px;
}
.editor {
  line-height: normal !important;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
  content: '请输入链接地址:';
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0px;
  content: '保存';
  padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode='video']::before {
  content: '请输入视频地址:';
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: '14px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
  content: '10px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
  content: '18px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
  content: '32px';
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: '文本';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
  content: '标题1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
  content: '标题2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
  content: '标题3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
  content: '标题4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
  content: '标题5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
  content: '标题6';
}
.ql-editor .ql-font-Microsoft-YaHei {
  font-family: 'Microsoft YaHei';
}
.ql-editor .ql-font-SimSun {
  font-family: 'SimSun';
}
.ql-editor .ql-font-SimHei {
  font-family: 'SimHei';
}
.ql-editor .ql-font-KaiTi {
  font-family: 'KaiTi';
}
.ql-editor .ql-font-Arial {
  font-family: 'Arial';
}
.ql-editor .Times-New-Roman {
  font-family: 'Times New Roman';
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: '微软雅黑';
}
.ql-snow
  .ql-picker.ql-font
  .ql-picker-label[data-value='Microsoft-YaHei']::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-item[data-value='Microsoft-YaHei']::before {
  content: '微软雅黑';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='SimSun']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='SimSun']::before {
  content: '宋体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='SimHei']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='SimHei']::before {
  content: '黑体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='KaiTi']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='KaiTi']::before {
  content: '楷体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='Arial']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='Arial']::before {
  content: 'Arial';
}
.ql-snow
  .ql-picker.ql-font
  .ql-picker-label[data-value='Times-New-Roman']::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-item[data-value='Times-New-Roman']::before {
  content: 'Times New Roman';
} */
/* .ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: '标准字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
  content: '衬线字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
  content: '等宽字体';
} */
.el-input-custom {
  height: 36px;
}
.el-input-custom .el-input__inner {
  height: 36px !important;
  line-height: 36px !important;
}
</style>
  <style lang="less" scoped>
.el-label {
  font-size: 14px;
}
.edit {
  flex: 1;
  background: #fff;
  .mg-lt53 {
    margin-left: 53px;
  }
  .border-bottom-shadow {
    // border-bottom: 1px solid rgb(255, 234, 234);
    padding-bottom: 0.2375rem;
    box-shadow: 0px 3px 3px 0px rgba(20, 12, 27, 0.1);
    margin-bottom: 0.6rem;
  }
  .components-container {
    // flex: 1;
    margin-top: 19px;
    margin-bottom: 1.3rem;
    margin-left: 0.5625rem;
    margin-right: 0.5625rem;
    padding: 0.375rem;
    ul {
      li {
        color: #666;
        font-size: 14px;
        line-height: 1;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .left {
          width: 72px;
          // outline: 1px solid red;
          margin-right: 20px;
        }
      }
    }
  }
}
.submit-btn {
  background: #aaaaaa;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  margin-top: 0.725rem;
}
.red-btn {
  background: linear-gradient(0deg, rgba(205, 78, 81, 1), rgba(139, 47, 49, 1));
  &:active {
    background: linear-gradient(0deg, rgb(184, 71, 73), rgb(117, 40, 41));
  }
}
</style>

  