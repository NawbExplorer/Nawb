/**
 * Nawb (c) by Nawbc
 *
 * Nawb is licensed under a
 * Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 *
 * You should have received a copy of the license along with this
 * work. If not, see <http://creativecommons.org/licenses/by-nc-nd/4.0/>.
 */
const { promises } = require('fs');
const { resolve } = require('path');

promises
  .rm(
    resolve(
      __dirname,
      '../../third_party/react-native/node_modules/@react-native',
    ),
    { recursive: true, force: true },
  )
  .catch(err => {
    throw err;
  });
