import React, { useCallback, useState } from "react";
import Head from "next/head";
import { Form, Input } from "antd";

import AppLayout from "../components/AppLayout";

const Signup = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onChangeId = useCallback((e) => setId(e.target.value), []);
  const onChangeNick = useCallback((e) => setNick(e.target.value), []);
  const onChangePassword = useCallback((e) => setPassword(e.target.value), []);
  const onChangepasswordCheck = useCallback((e) => setPasswordCheck(e.target.value), []);

  const onSubmit = useCallback(() => {
    console.log(id, nick, password, passwordCheck);
  }, [id, nick, password, passwordCheck]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangepasswordCheck}
          />
        </div>
        <button>submit</button>
      </Form>
    </AppLayout>
  );
};

export default Signup;
