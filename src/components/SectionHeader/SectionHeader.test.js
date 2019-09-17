import React from 'react';
import SectionHeader from './SectionHeader';
import renderer from 'react-test-renderer';

describe('SectionHeader', () => {
   it('renders without error', () => {
      const tree = renderer
      .create(<SectionHeader title="test" />)
      .toJSON();
      expect(tree).toMatchSnapshot();
   });
});
