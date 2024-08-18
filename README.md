# karin-store

欢迎来到karin插件商店！在这里，你可以提交插件描述文件，通过审核后我们会将您的插件加入插件商店中。请按照以下步骤提交你的插件描述文件，并了解文件的结构说明。

## 提交插件描述文件

1. **准备插件描述文件**：
   - 创建一个新的插件描述文件，文件名建议使用插件的名称，例如 `karin-plugin-test.json`。

2. **文件结构**：
   - 确保你的插件描述文件遵循以下结构：
     ```json
     {
       "app": "插件名称",
       "view": {
         "title": "标题",
         "subtitle": "副标题",
         "text": "插件描述",
         "author": "作者",
         "icon": "插件图标",
         "dev": false,
         "home": "插件主页"
       },
       "install": [
            "通用安装流程",
            {
                "win":"Win 安装流程",
                "linux":"Linux 安装流程"
            }
       ],
       "uninstall": [
            "通用卸载流程",
            {
                "win":"Win 卸载流程",
                "linux":"Linux 卸载流程"
            }
       ],
       "installable": true,
       "npm": "npm包名称",
       "git": "git连接",
       "readme": {
         "markdown": "插件文档的Markdown内容",
         "url": [
           "插件文档的URL"
         ]
       },
       "version": "版本号"
     }
     ```

3. **提交步骤**：
   - 将插件描述文件添加到 `plugins/` 目录。
   - 提交更改并创建一个 Pull Request（PR）。
   - 在 PR 描述中包含插件的相关信息和变更说明。
   - 等待项目维护者审核和合并你的 PR。

## 插件描述文件结构说明

以下是插件描述文件的字段说明：

- **app**: 插件的名称。
- **view**: 插件的视图信息。
  - **title**: 插件的标题。
  - **subtitle**: 插件的副标题（可选）。
  - **text**: 插件的描述（可选）。
  - **author**: 插件的作者（可选）。
  - **icon**: 插件的图标（可选）。
  - **dev**: 插件是否处于开发状态（可选）。
  - **home**: 插件的主页链接（可选）。
- **install**: 安装流程，可以是字符串或对象数组。对象包含 `linux` 和 `win` 键分别表示Linux和Windows的安装步骤。
- **uninstall**: 卸载流程，格式同 `install`。
- **installable**: 插件是否可安装。
- **npm**: npm包名称（可选）。
- **git**: 插件的 Git 仓库链接（可选）。
- **readme**: 插件的 README 信息。
  - **markdown**: 插件文档的 Markdown 内容（可选）。
  - **url**: 插件文档的 URL 列表（可选）。
- **version**: 插件的版本号。

## 示例

下面是一个示例插件描述文件：

```json
{
  "app": "example-plugin",
  "view": {
    "title": "示例插件",
    "subtitle": "这是一个示例插件",
    "text": "这是一个功能强大的示例插件。",
    "author": "插件作者",
    "icon": "mdi-example",
    "home": "https://example.com"
  },
  "install": [
    "下载并解压文件",
    "运行安装脚本"
  ],
  "uninstall": [
    "删除安装目录",
    "移除配置文件"
  ],
  "installable": true,
  "npm": "example-plugin",
  "git": "https://github.com/example/example-plugin.git",
  "readme": {
    "markdown": "这是插件的详细文档。",
    "url": [
      "https://example.com/docs"
    ]
  },
  "version": "1.0.0"
}
```
