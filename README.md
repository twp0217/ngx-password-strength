# ngx-password-strength
A password strength component for Angular 2+ (基于angular 2+ 的密码强度组件)

## 安装

```
npm install ngx-password-strength --save
```

## 使用
- 安装依赖包：`ngx-password-strength`

```
npm install ngx-password-strength --save
```

- 在module导入`NgxPasswordStrengthModule`

```
import { NgxPasswordStrengthModule } from 'ngx-password-strength';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPasswordStrengthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- 在模板页面使用

```
<ngx-password-strength [checkPassword]="password"></ngx-password-strength>
```

# 文档
- `colors` - `Array<String>` - 密码强度颜色
- `checkPassword` - `String` - 检查密码

# 支持

- 如果项目对你有帮助，请点颗星:star:，谢谢。
- 如果你对项目有想法、问题、BUG，欢迎讨论。
