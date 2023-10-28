import ProductCart from "./card/ProductCard";

export default function ProductList(){
    let tab=[1,2,3,4,5,6,7,8,9,10];
    // article={{comment : [1,2,3,4,4,5],like:4.3,stock:3 ,category: "ordinateur portable", name:"Lenovo T470s" , price:150000 , image : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEREQ8QDxASEQ8REREQEBERFBIREhASGBQZGRoUGBgcIS4mHB44HxgYJzgmKy8xNTU4GiY7QD0zPy40NTEBDAwMEA8QGBIRHzQhGiE/MzQxMTQxMTQxNDQ0PzQ0NDQ0NDE1NDQxNjQ9NDQ0MTE0NDQxMT8/ND80NDQ0ND8xNP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBQYHBAj/xABLEAACAQICAwgNCgUDBAMAAAABAgADEQQSBSExFRZBUVNUkdIGBxMiMjNhcXKTlLHRNVJzdIGSoaKysxQ0QlXCQ4TBJURigiMk8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgUDBP/EACARAQEAAgMBAQADAQAAAAAAAAABAhEDE1ExMgRBcRT/2gAMAwEAAhEDEQA/AOzREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQETUe2VpitgtHvVw7Zar1KdFXsCaYYm7C/DYEDzzhbabxpJJx2Ludf8ziOtA+oony5u1jOfYv2nEdeU3bxvPsZ7TiOvLofUkT5a3bxvPsX7TiOvKbuY3n2L9pxHXjQ+ponyxu5jefYz2nEdaN3cbz7Ge01+tGh9TxPlfd3G8+xntNfrSm7uN59jPaa/WjQ+qYnytu9jefYz2mv1pfwelsbUemjaRxSK7ZSxxNY5dmu2fy6uP7I0PqKJ8vaS0rjKVV6aaRxbqhAD/xFcX1A7M/lnl3ex3P8Z7RX60g+q4nynu9juf4v2iv1pTd/Hc/xntFfrQPq2J8pbvY7n+L9or9aV3ex3P8X7RX60D6sifKe72O5/i/aK/Wld3sdz/Ge0V+tA+q4nypu/jufYv2mv1pXd7Hc+xntFfrS6H1VE+Vd3sdz7F+01+tOz9qDT+IxmGxCYmo1V8NURFqObuUZbhWP9RBB1nXrkHQ4iICIiAiIgaD25fkwfWqPuecNRbsoPCwHSZ3Lty/JY+tUP8AKcNo+Gnpr7xNRK2wdidI/wCpV6afVjelS5Sr0p1ZsKHVK3n29WPjm92frXd6NHlavTT6spvRo8rV6afVmx3i8dWPh3Z+tc3o0eVq9NPqxvQo8rV6U6s2K8kDHVj4d2frXB2HUeVrdNPqyo7DKPLVumn1ZsgMkDHVj4vdn61odhVDlq3TT6sqOwihy1bpp9WbODJAx1Y+Hdn61jePQ5av00+rKjsFw/LV+mn1ZtIMuAx1Y+Hdn61Cp2DYdVJNav5O+p6z92eXedR5Wt0p1ZteJq5jYbBq8545ZvHVj4ndn61vedR5Wt0p1Y3n0eVrdKdWbLeLx1Y+Hdn61refR5Wt0p1ZXedR5Wr0p1Zsl4vHVj4d2frW951HlavSnVg9h9HlavSnUmyXlt6vFrlnDjfkO/Of25pj8OKdWpTUkqjlQWtc+e0632iPFaR+lofoacr01/M4j0zOqdojxWkfpqP6DPhymrXRwu8ZXWIiJloiIgIiIGg9uX5L/wB1Q/ynDKPhp6a+8Tufbl+S/wDdUPe04XR8NPTX3iaiV0xDqkry0h1St50tOSneLyF4vAneSBloGSBjQugyQMtgyQMaF0GTBloGTEC4DI4irlXVtOoeTyyoNtZ2CeCrUzEno80aC8XkLxeBO8reWy0g1Xi6ZZjalsi8WkGq8Usk32wJuYyfWLlb8SLE7TKygElLaSOfaZ/mcR6ZnVu0R4nSP01H9szlWmf5mv6ZnVu0T4nSP01H9szk5/quxh+Y6tERMNkREBERA0Hty/Jf+5oe8zhVHw09NfeJ3XtzfJR+s0PeZwqj4aemvvE1ErpCnVF5FTqlbzqOSreLyN4vAkDJgy2DJAxoXQZMGWgZMGNC4DJgy2DDvlBMaEcTU/pHnPwnmlGa9yZbapxSzG34lsn1dJkGqcUtE32xNzCT6xcrfipN9sqJQSoltTSokhKCVmbVkSEqZQQTMVuRoGmP5iv6ZnVu0T4nSP09L9szlOl/5iv6ZnV+0V4nSH09L9uczP8AVdXD8x1WIiYbIiICIiBoPbm+Sj9Zw/6jOE0fDX0l94ndu3P8lH61h/1GcIpeGnpL7xNRK6Ip1St5BTqi86unJTvF5C8AxoXQZMGWgZMGNC4DJiWgZPNbbGhdE8uJra7Dg98pWrm1hq988s9Jh688svEyxMpKSs0zraUSkrM2tSKyokZW8zWpE4vI3i8jWkrwTI3gmTQ0XSv8xW9Mzq/aK8TpH6el+3OUaV8fW9Mzq/aK8TpH6el+3OZyfquph+Y6rERPNsiIgIiIGgduf5KP1nD/AKjOEUvDT0l94nd+3P8AJR+s4f8AUZwel4aekvvE1EroSnVF5bUyt513JTvKgy3eSBgXAZMS2plC/FLMdpcpF4uB55bLX1mREpUbgnpJI87bUWa5lJGVktJEokZWS1qRKVkLyt5lvSd4vLZccciagkWSr14vPOa3kkTWMaWY16rwzCeIueOQLS6anG1fSh/+et6ZnWO0X4nSP09L9uclx/janpmda7RfidI/T0v25yM/1XRx+R1SIiYaIiICIiBoHbo+ST9Zw/6jOC0vCX0l94nee3Sf+lf7rD+9pwWl4SekvvliVvynVK3kFMredmOUleSBkAYE1MfWMstfFy8kJASYm2NbSJsLywTwytR+DilsuJm1qYpxeWi8iXmXpMV4uINSefNKFo03MF81DIF5azShaGpiuFpQtLZaRvDcxXM0FpaLyJaGpiulpEtLZaULQ1MWv47xj+kZ1vtGeJ0j9PS/bnJMZ4x/SnW+0Z4rSP01H9szj8n6y/19M+R1SIiYUiIgIiIHPu3Wf+lD61Q/ynBaXhJ6S++d47dnyWn1yh+l5wZGsVPEQegyxK3xTKzBDshp8m/5fjK74qfJv+X4zrzm4p/bmZcPJfkZ0SomB3xU+Tf8vxkh2R0+Tf8AL8Yv8nj9Sfx8/GwLKPUCjy8EwB7JE+Y/5fjLb6fQnwH/AC/GT/o4/Xpj/Hy8ZlnkS0w27icm/wCX4ym7afMf8vxjv4/XpOHLxms0jmmH3aT5j/l+MvJj3ZQ60KrIcxDKtwQu03Hmjv4/VnFl4yOaULTxfxFW1/4Wta9r5dV+K/H5J5N2F+Y34fGO/j9anHky5aRLTF7rL8xvw+MpusvzG/CO/j9amFZQtKFpjN1V+Y34RuovzW/CO/j9WYVki0oWmN3TX5rfhKbpL81vwjv4/WpiyJaRLTwbor81vwjdBfmt+Enfx+tTF48V4x/POt9ozxekfpKH6WnIqr5mZhwm8632iz3mkfTw/wCl5zOS7ytajq8REwpERAREQNL7aWjf4rA06WYr/wDZpvcC51I85LvKPKP90fCdc7Yte2Ho01ZldqofvWKnKqsDcgHhYdHknOmdxtrVB56zD/CakmmbWDq9iSIQHrMCRcXA2SG9inzg9CzPtgqdYB6tSoSl1BWqbWOvWbDhkBofDHUKlYniFa8uorB72KfOD0LG9inzg9CzOHQ2F5St66VOhsMLXesL6xertgYLexT5wehZXexT5c9CzODQ2G1nPWsNp7rqEoNDYY6hUrE+StAwm9qny56Fje1T5c9CzNnQ+FGo1K1/ppU6GwwsS9YA7P8A5dsDB72afLnoE9FHRBQKq4yoqrfKotlFzc6tm3X59e2ZQaGwxvapWNttquyUGh8LwVK1/poGOqaJZgA2LchcthZRaxBB1DbcA323AnmHY1T5c9AmaOh8Lw1K3rpU6GwwtepWF9l6u2Bhd7dPlz0CN7dPlz0CZoaGwxuQ9aw2nuuyUGh8MdQqVifpoGG3t0+XPQI3uU+XPQJmTofDDUalYH6aVOhsMLEvWsdh7rtgYbe5T5c9Aje5T5c9AmZGhsMb2qVjbbarslBofC8FSt66Bh97tPlz0CTp9jKOQq1iWN9QAmVOhsMNRqVgeI1pNNHUaXfpUqh7EKWqm2vUeAwMbvPPz2+6J0XtUaIOFGOBYtnagdYtawcTT1LHZXqHzVXP+E3Ttc18rYmm7szOtNkzMzalzZgLgWPfDo8kX4kroEREw0REQEtu4UFmICgEknUABtJlyal2eaW7lSXDoe/ra3ttWkDr6Tq8waBqmndKmvWet/STlQH+lBs83GfKTNC0ji2qVHfXbwVsQO9Gz4/bMxpjFZKZAIDP3ovxcP4e+a1q/wDDom0ehKtqbr32ZnQ+ELFVDajfVtaVpO6VELAqUdc12U5bNr8Em5nmRkOtWp3B2hdh+wy6EVyijueezl3Ka2PfOWJGu1rD/wDY0yEtrIDFQbXLpfXe1+EnUddpcdyyoO+LjvFXMoAXVlGvhJLcPFLNPKCM3cygzHJkBUsVIBIPlIP2QKYAR1NMXLZSFNwUa1wfP7o0u1+k5BZHzKjFRUsylgFJ1DaOGW6bupV1U2R1sc62zizAEXvxcFoREc00UU87MVZigu5ZtWzXYD3GRplARmNN0uWy5bqxKkA2OriP2Ro2mSTktnZ2JDAstsxaygE217Np4ZMVS2VamZVRWUZWW/8AUQL6x4R2ywqWUVFNMWfKCFINwA1x0iVy02yKBTzkkM2Qd+WbV5dQjRtcSpUVWsDkeyFsyayCGta9+Lg4ZUXunc87Ocuosg7/ADagL28m0yCZEcLU7m6I7XTL3pI1G19XBxSNNLKXVqYyFRcKQbm+sW2bI0bXAbly+dTZz3rKe/4Aduq8O7lUJU5FuitnXjLWte/9XFLTlCt7Uu6ZmLPlF2BA1E7TsPTJuio2RzTZFZWZMt1YajsPk1XjRtcFRh3lPM3dERXDMgOfNewJsNoHSZCm1rk51Zda2ZfDDDUdvl2SKIDnZDTUJZwApuBmAFrcRIkWCFdlPumfMXygkrltlJ27de2NG03dyS5UgOzG+ZbFr3Ite/DxSdR2bIiBmAACAuoa7WJUk2HhEyy2VSiO1JgQrhSNTAj5p8gt9kqqC7lDTULndQEIIUG4UW4QPdGja7Sq2Wp4WZkCgZhl8NSb24bDVwavLLd3ADWYAkhWzp4QsdWu4OscEtu1O3fGkHLghyq3YWIKknXtIO3glyollTMabI3fhcpK3Bsbg6rxpF2u5eoxRSc7XAzAa21ka/KTKNUzU08LOjsQMwsabKL24PCUcPCZ52amXfuZpqoa4UKLp5NX2yrOBrLoBxm4/wCY0PXo7FvTqI+VreC12W2U7Tt+37JumjtIPTdKqHvkYMOI8YPkIuPtmgZv/Jfxmw6FxWZMpILJYG3zddvh9kNO7YPEpWppVQ3V1DDj18B8vBPRNF7AdL62wjnbepRvx/1qP1fem9TNUiIkFqvWWmj1HNlRSzHiAFzOR6Zrviq9Su7WznvF+ZTGpV6NvlJm3dnulcqphUOt7VKtuBQe9X7SL/8AqOOaP3SakZrG47RdRyCKyqoFgpQm3Gb5hPHuG5/11A17KZv9nfzNu+qWg8qPJU0XVOYJicqNlGTIxBC7Ae+17JbpaFqLnJxAzMuQEIwUAspNxm1nVb7ZlQ8rnmk2wx0HV4MQnqz15dqaGqEIFrgBEVe+QtcjafCmUzxng2xNLQtVWzHELcBsuVGWzFSoJ7/WNd7eSROg63OE9W3XmYzxng217EaNemQHxKXIvqoudX35ZOFPOV9Q/XmXx6Zn8ygf8/8AM84oyKx38I3OF9Q/Xj+FbnC+obrzJikJXuQgYr+Fbl19Q3Xlf4RucL6h+vMp3IShoiB4aOHtmviLhkKDLRdbEkG57432EfbJ0MCzsFGJUsb2HcXXZ/7z0mjLmGp5aiHy26dX/MCi6HfI6muNZRlshAUi97jNrvcdEtjQlbhxCeqbrzMZ4zypti6WhqgvmrqVZWRgqMpsVI1HNq12P2S2NB1ecJ6s9eZjPGeDbFVNDVCqAV1DLmFyhIIJuNWbUdvT5Io6Hqqyt3dTYgkZCLjhHhcUyueM8G2DbQjg2FdcvBmRi1vKc2uerAaLdGzd2UrYhlyEX+3Nx2nsZ5cpvMqvYUPSdKqOA9Ng6mxtcHYfJwHzzr2jcamIpJWTYw1jhUjUVPmN5x/uk2vsE0tkqthnPeVe+S/BUA1j7VH5RxyWLHQYiJlpzXso0SoxNWpUxlNDVYsBU70qNgW5NiAABMQNG0ufYb769adVxmjqNbxtNX84vMXU7D8C22gvQJdppz46Kpn/AL7DffXrSg0PT5/hfvr8Zvh7B9Hn/QXoEjvF0fyC9Al2aaQNE0+f4X76/GV3Ip8/wv31+M3beLo/kF6BG8XR/IL0CNpppO5FPn+E++vxldx6fP8ACesX4zdd4uj+QXoEbxdH8gvQI2aaXuNT/uGE9Yvxjcan/cMJ6xfjN03i6P5BegRvF0fyC9AjZppTaDpnWcfg/Wr8ZFtBUgCf4/BmwJsKq3PkGvbN33i6P5BegRvF0fyC9AjZpoo0fhOdD8nWjc7Cc7H5OtN63i6P5BegRvF0fyC9AjZpou52E52v5OtG52E52v5OtN63i6P5BegRvF0fyC9AjZpo6aFpMAwx2EUHWFeoocecX2yY0HSGvdDB+tX4zdd4uj+QXoEbxdH8gvQI2aaXuLT/ALhg/WL8ZTcel/cMJ6xfjN13i6P5BegRvF0fyC9AjZppW49P+4YP1i/GU3Ip/wBwwnrF+M3beLo/kF6BG8XR/IL0CNmmkbk0/wC4YT1i/GNyqfP8J99fjN33i6P5BegRvF0fyC9AjZpop0RT5/hPvr8YXRVMf9/hfvr1pvW8XR/IL0CVHYNo/kF6BG100U6Npc+wv31609ei9Do9RO5Y6iXRldRTIepcMCCoB2zc6fYZgF2UF6BMlgdDYagb0qSqeMASbNMheJWJFIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/Z"}}
    return (
        <div className="container-fluid px-md-5">
            <div className="p-lg-5">
                <div className=' row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  row-cols-xxl-5 gx-3 gx-md-5 gx-lg-4'>
                    {tab.map(elt=>{
                        return <ProductCart/>
                    })}
                </div>
            </div>
        </div>
    )   
}