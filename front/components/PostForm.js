import React, { useCallback, useState } from "react";
import { Button, Form, Input } from "antd";
import { useSelector } from "react-redux";

const PostForm = () => {
  const [text, onChangeText] = useState("");
  const { imagePaths } = useSelector((state) => state.post);

  const onSubmit = useCallback(() => {}, []);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요 ?"
      />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img src="v" alt="v" style={{ width: "200px" }} />
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
