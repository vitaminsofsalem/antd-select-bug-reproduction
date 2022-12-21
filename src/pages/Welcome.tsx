import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography, Select, Space } from 'antd';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  const intl = useIntl();

  const multiDuplicateData = [
    { value: 'jack', label: 'Jack' },
    { value: 'jack', label: 'Jack' },
    { value: 'linda', label: 'linda' },
    { value: 'linda', label: 'linda' },
    { value: 'a', label: 'a' },
    { value: 'b', label: 'b' },
    { value: 'c', label: 'c' },
    { value: 'd', label: 'd' },
    { value: 'e', label: 'e' },
    { value: 'g', label: 'g' },
    { value: 'f', label: 'f' },
    { value: 'h', label: 'h' },
    { value: 'i', label: 'i' },
    { value: 'k', label: 'k' },
    { value: 'j', label: 'j' },
    { value: 'l', label: 'l' },
    { value: 'm', label: 'm' },
    { value: 'n', label: 'n' },
    { value: 'o', label: 'o' },
    { value: 'p', label: 'p' },
    { value: 'q', label: 'q' },
    { value: 'r', label: 'r' },
    { value: 's', label: 's' },
    { value: 't', label: 't' },
    { value: 'u', label: 'u' },
    { value: 'v', label: 'v' },
    { value: 'w', label: 'w' },
    { value: 'x', label: 'x' },
    { value: 'y', label: '7' },
    { value: 'z', label: 'z' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
  ];

  const singleDuplicateData = [
    {
      value: 'Vietnam',
      label: 'Vietnam',
    },
    {
      value: 'Vietnam',
      label: 'Vietnam',
    },
    {
      value: 'Spain',
      label: 'Spain',
    },
    {
      value: 'India',
      label: 'India',
    },
    {
      value: 'Japan',
      label: 'Japan',
    },
    {
      value: 'Ukraine',
      label: 'Ukraine',
    },
    {
      value: 'Egypt',
      label: 'Egypt',
    },
    {
      value: 'USA',
      label: 'USA',
    },
    {
      value: 'Germany',
      label: 'Germany',
    },
    {
      value: 'France',
      label: 'France',
    },
    {
      value: 'a',
      label: 'a',
    },
    {
      value: 'b',
      label: 'b',
    },
    {
      value: 'c',
      label: 'c',
    },
    {
      value: 'd',
      label: 'd',
    },
    {
      value: 'e',
      label: 'e',
    },
    {
      value: 'f',
      label: 'f',
    },
  ];

  return (
    <PageContainer>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-components</CodePreview>
        <Space direction="vertical">
          <Typography.Text>Multiple duplicate entries behavior</Typography.Text>
          <Select style={{ width: '50%' }} options={multiDuplicateData} />
          <Typography.Text>single duplicate entry behavior</Typography.Text>
          <Select style={{ width: '50%' }} options={singleDuplicateData} />
        </Space>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
