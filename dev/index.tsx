import * as React from 'react';
import * as ReactDOM from 'react-dom';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
import omit from 'lodash/omit';

// Start the player

const IndigoPlayer = (window as any).IndigoPlayer;

const player = IndigoPlayer.init(document.getElementById('playerContainer'), {
  autoplay: true,
  showNativeControls: true,
  // freewheel: {
  //   clientSide: true,
  //   network: 96749,
  //   server: 'https://demo.v.fwmrm.net/ad/g/1',
  //   videoAsset: 'DemoVideoGroup.01',
  //   // videoAsset: 'TEST_AD_BRAND_ANV_10003623',
  //   duration: 594,
  //   siteSection: 'DemoSiteGroup.01',
  //   profile: 'global-js',
  //   cuepoints: ['preroll', 12, 'postroll'],
  // },
  sources: [
    // {
    //   type: 'mp4',
    //   src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    // },
    // {
    //   type: 'dash',
    //   src: 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd',
    //   drm: {
    //     widevine: {
    //       licenseUrl: 'https://widevine-proxy.appspot.com/proxy',
    //     },
    //     playready: {
    //       licenseUrl: 'https://playready.directtaps.net/pr/svc/rightsmanager.asmx?PlayRight=1&#038;ContentKey=EAtsIJQPd5pFiRUrV9Layw==',
    //     },
    //   },
    // },
    // {
    //   type: 'hls',
    //   src: 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/m3u8s/11331.m3u8',
    // },
    {
      type: 'webm',
      src: 'http://ptgmedia.pearsoncmg.com/imprint_downloads/peachpit/peachpit/downloads/0321793935/media//elephants-dream-medium.webm',
    },
  ],
  captions: [
    {
      label: 'English',
      srclang: 'en',
      src: './dev-assets/en-subs.vtt',
    },
  ],
});
(window as any).player = player;

player.on(IndigoPlayer.Events.STATE_CHANGE, ({ state }) => {
  render(state);
});

export interface StateProps { state: any };

export const State = (props: StateProps) => {
  const state = omit(props.state, ['ad.freewheelAdInstance']);
  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => location.reload()}>Reload</button>
    </div>
   );
};

function render(state) {
  ReactDOM.render(<State state={state} />, document.getElementById('state'));
}