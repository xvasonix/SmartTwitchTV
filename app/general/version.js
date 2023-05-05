/*
 * Copyright (c) 2017-2021 Felipe de Leon <fglfgl27@gmail.com>
 *
 * This file is part of SmartTwitchTV <https://github.com/fgl27/SmartTwitchTV>
 *
 * SmartTwitchTV is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * SmartTwitchTV is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with SmartTwitchTV.  If not, see <https://github.com/fgl27/SmartTwitchTV/blob/master/LICENSE>.
 *y
 */

//Spacing for release maker not trow errors from jshint
var version = {
    VersionBase: '3.0',
    publishVersionCode: 347, //Always update (+1 to current value) Main_version_java after update publishVersionCode or a major update of the apk is released
    ApkUrl: 'https://github.com/fgl27/SmartTwitchTV/releases/download/347/SmartTV_twitch_3_0_347.apk',
    WebVersion: 'May 05 2023',
    WebTag: 652, //Always update (+1 to current value) Main_version_web after update Main_minversion or a major update of the web part of the app
    changelog: [
        {
            title: 'Web Version May 05 2023',
            changes: ['Fix VOD chat']
        },
        {
            title: 'Web Version February 25 2023',
            changes: ['General UI improves', 'General improves']
        },
        {
            title: 'Web Version February 24 2023',
            changes: [
                'Add Carousel seek preview mode for VOD, enabled by default',
                'Add settings options to change or disable seek preview mode',
                'Fix VOD animated preview img, not all VOD have an animated preview',
                'General improves'
            ]
        },
        {
            title: 'Web Version February 23 2022 and Apk Version 3.0.347',
            changes: [
                'Update player to latest version',
                'Fix resolution cap at 720p or lower for the main player during PP mode (only affected a few devices)',
                'General improves'
            ]
        }
    ]
};
