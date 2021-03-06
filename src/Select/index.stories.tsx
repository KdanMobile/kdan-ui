import React from 'react';
import styled from 'styled-components';

import Select, { SelectProps } from './';
import Textfield from '../Textfield';
import { Container } from '../component/Decorator';

export default {
  title: 'Select',
  component: Select,
  decorators: [(story: () => React.ReactNode): React.ReactNode => <Container padding>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: '下拉式選單',
      },
    },
  },
};

export const Basic = (): React.ReactNode => (
  <Select
    placeholder="Test"
    options={[
      { value: '12', key: 12 },
      { value: '23', key: 23 },
      { value: '34', key: 34 },
      { value: '45', key: 45 },
      { value: '56', key: 56 },
    ]}
  />
);

export const CustomContent = (props: SelectProps): React.ReactNode => <Select {...props} />;

CustomContent.args = {
  placeholder: 'Choose a Fruit',
  enabledInput: true,
  options: [
    { value: 'Apple', key: 'Apple' },
    { value: 'Banana', key: 'Banana' },
    { value: 'Lemon', key: 'Lemon' },
    { value: 'Watermelon', key: 'Watermelon' },
  ],
} as SelectProps;

export const LanguageBar = (props: SelectProps): React.ReactNode => <Select {...props} />;

LanguageBar.args = {
  defaultValue: 'English',
  position: 'top',
  options: [
    { value: 'English', key: 'en' },
    { value: '日本語', key: 'ja' },
    { value: '中文（繁體）', key: 'zh-tw' },
    { value: '中文（简体）', key: 'zh-cn' },
    { value: 'Español', key: 'es' },
  ],
} as SelectProps;

export const Group = (props: SelectProps): React.ReactNode => (
  <>
    <Textfield />
    <Select {...props} />
  </>
);

Group.args = {
  defaultValue: 'English',
  options: [
    { value: 'English', key: 'en' },
    { value: '日本語', key: 'ja' },
    { value: '中文（繁體）', key: 'zh-tw' },
    { value: '中文（简体）', key: 'zh-cn' },
    { value: 'Español', key: 'es' },
  ],
} as SelectProps;

const CustomWrapper = styled.div`
  .ku-select-label {
    color: brown;
  }
  .ku-select-required-icon {
    color: red;
  }
  .ku-select-selected {
    color: blue;
  }
  .ku-select-arrow {
    border-top-color: blue;
  }
  .ku-select-helper-text {
    color: red;
  }
`;

export const CustomStyle = (props: SelectProps): React.ReactNode => (
  <CustomWrapper>
    <Select {...props} />
  </CustomWrapper>
);

CustomStyle.args = {
  label: 'Language',
  required: true,
  defaultValue: 'English',
  options: [
    { value: 'English', key: 'en' },
    { value: '日本語', key: 'ja' },
    { value: '中文（繁體）', key: 'zh-tw' },
    { value: '中文（简体）', key: 'zh-cn' },
    { value: 'Español', key: 'es' },
  ],
  helperText: 'helper text',
} as SelectProps;
