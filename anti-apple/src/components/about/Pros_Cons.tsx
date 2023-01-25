import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { Stack } from "@chakra-ui/react";
import Sidebar from '../Sidebar';

const ProsCons = () => {
    return (
        <>
          <MediaQuery query="(max-width:900px)">
            <React.Fragment>
              <div>
                <h1>格安SIMとは？</h1>
                <p>
                  <Link to="/">ホーム</Link>
                </p>
                <p>
                  <Link to="/about">格安SIMとは？</Link>
                </p>
                <p>
                  <Link to="/pros_cons">格安SIMのメリット・デメリット</Link>
                </p>
                <p>
                  <Link to="/content">コンテンツ一覧</Link>
                </p>
              </div>
            </React.Fragment>
          </MediaQuery>
    
          <MediaQuery query="(min-width:901px)">
            <React.Fragment>
              <Stack direction="row">
                <Sidebar />
                <div>
                  <h1>格安SIMとは？</h1>
                  <p>
                    <Link to="/">ホーム</Link>
                  </p>
                  <p>
                    <Link to="/about">格安SIMとは？</Link>
                  </p>
                  <p>
                    <Link to="/pros_cons">格安SIMのメリット・デメリット</Link>
                  </p>
                  <p>
                    <Link to="/content">コンテンツ一覧</Link>
                  </p>
                </div>
              </Stack>
            </React.Fragment>
          </MediaQuery>
        </>
      );
    };

export default ProsCons;