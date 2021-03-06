import React from 'react';
import addons from '@storybook/addons';

import ThemePanel from './ThemePanel';

const ADDON_ID = 'custom-addon';
const PANEL_ID = `${ADDON_ID}/theme`;

addons.register(ADDON_ID, api => {
  const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Theme',
    render: () => <ThemePanel channel={channel} api={api} />,
  });
});