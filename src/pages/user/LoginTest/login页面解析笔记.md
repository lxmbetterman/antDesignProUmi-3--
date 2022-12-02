### import { FormattedMessage, history, SelectLang, useIntl, useModel } from 'umi';

FormattedMessage 多语言翻译组件

### useState 的用法

const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});

- 设置： setUserLoginState(msg:API.LoginResult);
- 取值： const { status, type: loginType } = userLoginState;

const { initialState, setInitialState } = useModel('@@initialState'); setInitialState 是个 asyn 函数可以 await 操作

### 登录权限校验

```js
// 登录获取用户信息并保存 @@initialState
const fetchUserInfo = async () => {
const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
        await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
        }));
    }
};

// 页面change
onPageChange: () => {
    const { location } = history;
    // 如果没有登录，重定向到 login
    if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
    }
},
```
