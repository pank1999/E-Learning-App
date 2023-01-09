import { Injectable, Renderer2 } from '@angular/core';
import AgoraRTC, {
  ClientRole,
  IAgoraRTCClient,
  ILocalAudioTrack,
  ILocalVideoTrack,
  IRemoteAudioTrack,
  IRemoteVideoTrack,
} from 'agora-rtc-sdk-ng';

interface IOptions {
  appId: string;
  channel: string;
  token: string;
  uid: string;
  role: 'host' | 'audience' | null;
  userId: number;
}
interface IChannelParameters {
  localAudioTrack: ILocalAudioTrack | null;
  localVideoTrack: ILocalVideoTrack | null;
  remoteAudioTrack: IRemoteAudioTrack | null | undefined;
  remoteVideoTrack: IRemoteVideoTrack | null;
  remoteUid: string | null;
}
@Injectable({
  providedIn: 'root',
})
export class AgoraRTCService {
  options: IOptions = {
    // Pass your App ID here.
    appId: '337bc7f6f89f42b4b71dbd0fc0fe4a5a',
    // Set the channel name.
    channel: 'PCS',
    // Pass your temp token here.
    token:
      '007eJxTYBB5qVfLsePec3XhbM6HMy32V03lizXMX7zjavHPnWYfs64qMBgbmyclm6eZpVlYppkYJZkkmRumJKUYpCUbpKWaJJomCjnuSW4IZGSY6SPFwAiFID4zQ4BzMAMDAEEzHuU=',
    // Set the user ID.
    uid: '0',
    // Set the user role
    role: null,
    userId: 0,
  };
  channelParameters: IChannelParameters = {
    // A variable to hold a local audio track.
    localAudioTrack: null,
    // A variable to hold a local video track.
    localVideoTrack: null,
    // A variable to hold a remote audio track.
    remoteAudioTrack: null,
    // A variable to hold a remote video track.
    remoteVideoTrack: null,
    // A variable to hold the remote user id.s
    remoteUid: null,
  };

  agoraEngine = AgoraRTC.createClient({ mode: 'live', codec: 'vp8' });
  remotePlayerContainer: HTMLDivElement = document.createElement('div');
  localPlayerContainer: HTMLDivElement = document.createElement('div');
  public startBasicCall() {
    console.log('start call func called');
    this.localPlayerContainer.id = this.options.uid;
    // this.localPlayerContainer.textContent = 'Local user ' + this.options.uid;
    this.localPlayerContainer.style.width = '99%';
    this.localPlayerContainer.style.height = '59vh';
    this.localPlayerContainer.style.padding = '2px';
    this.localPlayerContainer.style.borderRadius = '10px';
    // Set the remote video container size.
    this.remotePlayerContainer.style.width = '99%';
    this.remotePlayerContainer.style.height = '59vh';
    this.remotePlayerContainer.style.padding = '2px';
    // this.remotePlayerContainer.style.border = '2px solid black';

    this.agoraEngine.on('user-published', async (user, mediaType) => {
      await this.agoraEngine.subscribe(user, mediaType);
      console.log('subscribe success');
      if (mediaType == 'video' && user.videoTrack) {
        // Retrieve the remote video track.
        this.channelParameters.remoteVideoTrack = user.videoTrack;
        // Retrieve the remote audio track.
        this.channelParameters.remoteAudioTrack = user.audioTrack;
        // Save the remote user id for reuse.
        this.channelParameters.remoteUid = user.uid.toString();
        // Specify the ID of the DIV container. You can use the uid of the remote user.
        this.remotePlayerContainer.id = user.uid.toString();
        this.channelParameters.remoteUid = user.uid.toString();
        if (
          this.options.role != 'host' &&
          this.channelParameters.remoteVideoTrack
        ) {
          // Play the remote video track.
          this.channelParameters.remoteVideoTrack.play(
            this.remotePlayerContainer
          );
        }
      }
      // Subscribe and play the remote audio track If the remote user publishes the audio track only.
      if (mediaType == 'audio' && this.channelParameters.remoteAudioTrack) {
        // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
        this.channelParameters.remoteAudioTrack = user.audioTrack;
        // Play the remote audio track. No need to pass any DOM element.
        this.channelParameters.remoteAudioTrack?.play();
      }
      // Listen for the "user-unpublished" event.
      this.agoraEngine.on('user-unpublished', (user) => {
        console.log(user.uid + 'has left the channel');
      });
    });
  }

  public async joinBtnClicked() {
    if (this.options.role === null) {
      window.alert('Select a user role first!');
      return;
    }

    // Join a channel.
    await this.agoraEngine.join(
      this.options.appId,
      this.options.channel,
      this.options.token
      // this.options.userId
    );
    // Create a local audio track from the audio sampled by a microphone.
    this.channelParameters.localAudioTrack =
      await AgoraRTC.createMicrophoneAudioTrack();
    // Create a local video track from the video captured by a camera.
    this.channelParameters.localVideoTrack =
      await AgoraRTC.createCameraVideoTrack();
    if (this.options.role == 'host') {
      // Publish the local audio and video tracks in the channel.
      await this.agoraEngine.publish([
        this.channelParameters.localAudioTrack,
        this.channelParameters.localVideoTrack,
      ]);
      // Play the local video track.
      this.channelParameters.localVideoTrack.play(this.localPlayerContainer);
      // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
      // this.channelParameters.remoteAudioTrack = user.audioTrack;
      // // Play the remote audio track. No need to pass any DOM element.
      this.channelParameters.localAudioTrack.play();
      console.log('publish success!');
    }
  }

  public async leaveBtnClicked() {
    if (
      this.channelParameters.localAudioTrack &&
      this.channelParameters.localVideoTrack
    ) {
      this.channelParameters.localAudioTrack.close();
      this.channelParameters.localVideoTrack.close();
      // Remove the containers you created for the local video and remote video.
      this.removeDiv(this.remotePlayerContainer.id);
      this.removeDiv(this.localPlayerContainer.id);
      // Leave the channel
      await this.agoraEngine.leave();
      console.log('You left the channel');
      // Refresh the page for reuse
      window.location.reload();
    }
  }
  public async hostIsChecked() {
    // Save the selected role in a variable for reuse.
    this.options.role = 'host';
    // Call the method to set the role as Host.
    await this.agoraEngine.setClientRole(this.options.role);
    if (
      this.channelParameters.localVideoTrack &&
      this.channelParameters.localAudioTrack &&
      this.channelParameters.remoteVideoTrack
    ) {
      // Publish the local audio and video track in the channel.
      await this.agoraEngine.publish([
        this.channelParameters.localAudioTrack,
        this.channelParameters.localVideoTrack,
      ]);
      // Stop playing the remote video.
      this.channelParameters.remoteVideoTrack.stop();
      // Start playing the local video.
      this.channelParameters.localVideoTrack.play(this.localPlayerContainer);
    }
  }
  public async audienceIsChecked() {
    // Save the selected role in a variable for reuse.
    this.options.role = 'audience';
    if (
      this.channelParameters.localAudioTrack != null &&
      this.channelParameters.localVideoTrack != null
    ) {
      // Unpublish local tracks to set the user role as audience.
      await this.agoraEngine.unpublish([
        this.channelParameters.localAudioTrack,
        this.channelParameters.localVideoTrack,
      ]);
      // Stop playing the local video track
      this.channelParameters.localVideoTrack.stop();
      this.localPlayerContainer.style.display = 'none';
      if (this.channelParameters.remoteVideoTrack != null) {
        // Play the remote video stream, if the remote user has joined the channel.
        this.channelParameters.remoteVideoTrack.play(
          this.remotePlayerContainer
        );
        this.channelParameters.remoteAudioTrack?.play();
      }
    }
    // Call the method to set the role as Audience.
    await this.agoraEngine.setClientRole(this.options.role);
  }
  public removeDiv(elementId: string) {
    console.log('Removing ' + elementId + 'Div');
    let Div = document.getElementById(elementId);
    if (Div) {
    }
  }
}
