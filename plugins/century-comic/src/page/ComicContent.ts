import { TapZone, Zone, navigation } from 'carla';

export const ComicContent = function () {
  let currentPage = 1;

  return TapZone({
    onTap() {},
    children: Zone({
      style: {
        width: 200,
        height: 400,
        backgroundColor: 'blue',
      },
    }),
  });
};
