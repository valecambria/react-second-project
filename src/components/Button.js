import propTypes from 'prop-types'
import className from 'classnames'
function Button({children,
primary,
secondary,
success,
warning,
danger,
outline,
rounded,
...rest}){
    const classes = className(rest.className,'px-3 py-1.5 border', {
        'border-blue-500  text-white': primary,
        'border-orange-400  text-white': secondary,
        'border-green-500  text-white': success,
        'btn btn-warning': warning,
        'border-red-500  text-white': danger,
        'rounded-full': rounded,
        'btn btn-outline': outline,
        'text-blue-500': outline && primary,
        'text-green-500': outline && success,
        'text-red-500': outline && danger,
        'text-orange-400': outline && secondary,
    })
    return <button {...rest} className={classes}>{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger)

        if (count > 1){
            return new Error('Only one of primary, secondary, success, warning, danger can be true')
        }
    }
}

export default Button