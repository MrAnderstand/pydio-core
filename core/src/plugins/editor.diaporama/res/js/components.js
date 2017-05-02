/*
 * Copyright 2007-2013 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
 * This file is part of Pydio.
 *
 * Pydio is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pydio is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The latest code can be found at <https://pydio.com>.
 */

import React, {Component} from 'react'

export class Image extends Component {
    static get propTypes() {
        return {
            width: React.PropTypes.number,
            height: React.PropTypes.number,
        }
    }

    render() {
        const {src, style, width, height, ...remainingProps} = this.props

        return (
            <div
                {...remainingProps}
                style={{
                    width,
                    height,
                    backgroundImage:'url(' + src + ')',
                    backgroundSize : "cover",
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    margin: 'auto'
                }}
            />
        )
    }
}

export class ImageContainer extends Component {
    static get propTypes() {
        return {
            src: React.PropTypes.string.isRequired,
            imgClassName: React.PropTypes.string
        }
    }

    static get styles() {
        return {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: 'auto'
        }
    }

    render() {
        const {src, style, width, height, imgClassName, scale} = this.props

        return (
            <div style={{...ImageContainer.styles, ...style}}>
                <Image
                    src={src}
                    className={imgClassName}
                    width={width * scale}
                    height={height * scale}
                />
            </div>
        )
    }
}
