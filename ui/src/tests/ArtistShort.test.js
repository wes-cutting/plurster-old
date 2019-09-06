import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ArtistShort from '../components/artists/ArtistShort'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const testArtist = {
    'name': 'Billy'
 }

test('ArtistShort renders', () => {
    const artistShort = shallow(<ArtistShort artist={testArtist}/>);

    expect(artistShort.contains('Billy')).toEqual(true);
});