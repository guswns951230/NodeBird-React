import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>NodeBird</a></Link>
        </Menu.Item>

        <Menu.Item>
          <Link href="/profile"><a>Profile</a></Link>
        </Menu.Item>

        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>

        <Menu.Item>
          <Link href="/signup"><a>Sign Up </a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/guswns951230" target="_blank" rel="noreferrer noopener">Made by Kang</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;