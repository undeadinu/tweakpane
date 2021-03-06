import {assert} from 'chai';
import {describe, describe as context, it} from 'mocha';

import Color from './color';

describe(Color.name, () => {
	[
		{
			expected: {r: 10, g: 20, b: 30},
			rgb: {r: 10, g: 20, b: 30},
		},
		{
			expected: {r: 0, g: 255, b: 0},
			rgb: {r: -1, g: 300, b: 0},
		},
	].forEach(({expected, rgb}) => {
		context(`when ${JSON.stringify(rgb)}`, () => {
			const c = new Color(rgb.r, rgb.g, rgb.b);
			it('should get components', () => {
				assert.deepStrictEqual(c.getComponents(), [
					expected.r,
					expected.g,
					expected.b,
				]);
			});
			it('should convert to object', () => {
				assert.deepStrictEqual(c.toObject(), expected);
			});
		});
	});
});
