import React from 'react';
import { action } from '@storybook/addon-actions';

import { LanguageBar } from './LanguageBar';
import { Container } from '../Decorator';

const langLabels = [
  {
    key: 'en',
    value: 'English'
  },
  {
    key: 'ja',
    value: '日本語'
  },
  {
    key: 'zh-tw',
    value: '中文（繁體）'
  },
  {
    key: 'zh-cn',
    value: '中文（简体）'
  },
  {
    key: 'es',
    value: 'Español'
  },
  {
    key: 'ko',
    value: '한국어'
  },
  {
    key: 'it',
    value: 'Italiano'
  }
];

export default {
  component: LanguageBar,
  title: 'LanguageBar',
  decorators: [(story) => <Container styleType='middle'>{story()}</Container>],
  parameters: {
    docs: {
      description: {
        component: '下拉式語系選單。'
      }
    }
  }
};

const Template = (args) => <LanguageBar {...args} />;

const actionsData = {
  onChange: action('onChange')
};

export const base = Template.bind({});
base.args = {
  theme: 'default',
  value: 'English',
  options: langLabels,
  ...actionsData
};