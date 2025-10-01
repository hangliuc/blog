# ansible 缓存ssh密钥

1. 启动 ssh-agent 后台程序

eval "$(ssh-agent -s)"

2. 将密钥添加至 ssh-add，只输入一次密码

ssh-add ~/.ssh/xxx

3. 验证密钥是否缓存成功

ssh-add -l