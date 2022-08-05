import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const foods = [
  {
    title: "Khachapuri",
    description: "",
    price: "₾ 12",
    image: "https://winesgeorgia.com/wp-content/uploads/2020/07/Foods4.jpeg",
  },
  {
    title: "Khinkali",
    description: "",
    price: "₾ 1",
    image: "https://winesgeorgia.com/wp-content/uploads/2020/07/Foods5.jpeg",
  },
  {
    title: "Salad",
    description: "",
    price: "₾ 6",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQXFxYYGSAaGRkZGSAcIhwcHSEfIh8iIyIgIyoiGR8nIiAgIzUjJysxMjExGSE2OzYwOiowMS4BCwsLDw4PHRERHTInIicwLjE6MDgyMDIyMDAuMC4wMDgwODgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xAA/EAACAQIEBAQEAwcDAwQDAAABAhEDIQAEEjEFBkFREyJhcTKBkaFCsfAHFCNSwdHhFWLxM3KCFiRDojRTwv/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAQQFAAb/xAAwEQACAgEDAgQEBgIDAAAAAAABAgARAxIhMQRBEyJRYTJxkaEFFIHB8PEVsSNS0f/aAAwDAQACEQMRAD8AU2xC+JjiKpiJEgfFZhizUPbFaquOnSnXO+BpGCdbfA+sL4mdNceDHoGMHbHTpZ4ZW0VqbdnU/fHXjWkT3xyrIcuZqt/0cvVf10ED6mBjrOQ4HmTTTVSKtpEgkb47STxOsCVmfGhqYLf+lswRZR8jiDJcIFQvRZwmYpHS6G4YdGBG1iCfWcC3l5hqNQNdoOLDHhb1w10eQWIlqy3/AJROLKfs8pfiqufYAYnTA1RK1Y8Jx0BeRMsBu5/8sSLyblR+BifVjjtM65zrVjC+Olf+kcpH/Sv/ANxxo3KeV/8A1fc/3x1TrnNdeNg5x0R+U8of/ij2Y4rV+TqBZdCEL+I6zt6Yg7CcDEZnMYq1Ww7cS5fylNlQtUDNsoIJjvfpjytyDSO1Zx7qDiNiaBhEMACRzE2g2IuJVIpNhufkKp+Cup91IwJ4xyNmyhVDTe/R4/PBBYNwZwe1JfW+LmvG9Pl/M0kUNRaw6X/LFSurL8SlfcRiCDOsQfxevAb2xc4b5aCD0n64CcUebdyB9cGKrwAPSMDDlrLVbziyte+2B2Wa2Ns1X003bsDiRBlThFTXmKj9p++Dpqnthf5YXyM5/E35YL+JiTOkzVcZrxXL4wtgZ0n14zFbVjMdOiozE7DGrJ3ODGR4FnK//Tyjgd28g+8YNZb9l2aeDUq0qfcCWP8ATDArGRtEaq4GImy9RhqCnT3i2Os8N/ZXlqd69R6nudI+18M/DuW8tTAWnQkd22/+1z9MTo9ZBYThmR5QzVcgU6LGfxGw+uDuX/Y5mXg1a1KkOwlj/THbKeS7mB2UR/nAvM8bSnUKJSLaTDNIF+oE/FE45nRBZkojuaURG4L+xjLqwaq9SsB0+Bf7nDzwrk7LUQAmXpJHZQT9Tj2pzbTUSUb5FT/XHuT5vy9QxqZT2YX+04EZ0PBEcekygWVMJnILpKgxaxFo+QtiBswlFB4jKXAi27H23wO4nzJ5vDojzdXI8q+g2k/bCnmuM+BKVLsxOtmYXBO/cm+AbLvzG4ej1btsPpDHEeL1agh4BGwQkAT331GP64RM9x2tl8xpdoWCviBRqteTbzX6R1wyJxWk9OUcG5ABmTAmYjb88KlfM0M2xRyaYXYxJ1tYSfoe2EtvLa5Omx+W/wB50DlfjzsisxUrJGqnENtBK7gGenY+mG7LZ5HEgx72vjklDh3g0G0VQKiqCrAnexIK/iBiO98Hc1UFKjrFdXqCJpodUz2G+3U4hH0xGfEuuvvU6JP1wE5g47RSmwWqPEkaQDeZ9OmEx+b3UANUIMWmVaD+umM4fxTxiT4atopsxZZHlUGJIPe3zwxstihIx9IwOo8Q5S5rrASyoQdiSZt3wSyHNIezU9HqWkE+lpwppm6bJGgqRJlfNv3k2xVz1ZibVjMbGmF//rADxQP6ll+mxsOKPtHv/WAagpLGoid+m2/63GLIzLAeYR3v2xz7JZ+spDq2srvHQXn3GGjg/MJqahUUDTcmSDEbx1E2scJOTKDvKj9MVXV/c1r8BapWNZ3N/hIEaV6D5DHvEOLtSIUyfLYiLmY6nc+mLuZ5iyyJ4jVVCnbUQD7Xwq8Z53puYyymoWsCRCgx0sJ729MCC12DKzsSaPMIcY4r4elVqMytJJmCt9jA+WJeCcU1WJGgtoU6tjJ3+wnC4vD6seJU8ylJYTe/aPy9cCctzRRplqFKhUlD8LiN/imbgzEfI4YNQ3EvChj0FdyZ0vjfG0yyg1JEmBAmcV+GcZp5kEhZXbzLaesThZp81eHW0mmfBaNS1STFvMVvG2MPGXRAuWX+ESRT0ox1HdgCRcjf8sSMzA2Yj8oxYAkC/WMGd4BlKt2y6SDYr5TPyxQz3JlBhKVHQ9iAw/vgA/MmYLEVNVNSR4Z+C4swMi5Bti/kuNFqJq064qaG8ymZva0/Es2nvgm6qt6sRw/DjsCwBJoCa5nlSrTBIZHAvIMfngTzFwHMjLnTRZyxHwQ1vYGcGM1xQVk0hmBMk9h2vFxGL2V40KKmmq1XFJV8yoWkmLDubzbDcedHPErdR0mbAaaKHD8u9GkiujIYuGBFz74n8bDsM2mYUM4dSejjb3HTFWvwSkfwK3qv+MOChvhMrFiORFLxfXHuvBmvy2h+F2X0N8Va3LVQfA6n3kYg4yIQYGUNfrjMb/6LmP5PuMZgdJk2J1zMZpUEk/r+uIVSq940L6jzH2Xp8/piXhfDygDVIap1aSfpO3sMEcOLekWFJ5lLKZRR5tLau73P9h8sUucnqDK1DTmbTBg6ZGqPlgzOBnMtMtlqygwTTaD6gT98KeypuOx0GHzEAco8wwrUalwqsyNNyq3Kx1IvEdB6YTq3GnzVR6hsGeyg/CosPcwBOLdJWZZVWpMIqU27MJiD1HT64D5NlFZyPLJ1MsQFYzqA/wBs3HYMB0xn5HYppM2+lw+Gxc8mG69OFBnAnNVQrKyMVZYv6zv+X0xvms6WIvuYttPS+BGezMVPCqTTJG7D3j64SitNEZVVfOZvnuPOrEs7HV8ZG8Ht0nsOmK9N8yHCBZsPMIMo3mGozdiCNzbFzkuky5ihUYj+IxEGxBHxAk3E22x0Hi/DUWWVAqlZIC+V2E2MbGINxBI772VbSKHM851eX8xk9AOBEzh/DalBPHakrqPMqyCt1MEiL3vYjFLgNVSvitlWL1G/htOsCPMTp3Bv1HTffBzmVf3igBSJo01pw8WAgDyqIEtNiQYEHrhfyOeYU1RWgKBEHb/OJJOmDjwKrrY2jXqpgI/hkTNomQfKZB6QJHvitxfLkANQV1BADLAIt85HyxX4NzOgIp5gCCbEGA3v0XFjj2cIDNTcFR1UQMK1HtNcKbA+/YwPnsm+Yq00FQsSIZaihNAA6XvboROJeJcBfLMGDoKVRgo1OZiAWBKgAqDO14Itjbkak1eo6aVgBy7keeWICwd5+0Thur5DwEok1bUixgidWoG1+sTJPe+DI2uVHz5FbTt/O8r8pmsUZmy6aCQFUMIFI9bkgsB03n6nON8qB3ASo9MbCGk6v/L16DbAfJc21BqWggUkRTUwFAB3KjdowM41xrNIf4lWW/2ySPviAxitL4/MTUfKHCkojSgD6gQdViZHfr7RivxTl2oAHpNqAWwkgrN9/wAQ9Tjm1TjWeRg7VGdFYgR0U7Qense2LPFOdM6KJTUQjRPcCxv7jrgxzvIR8mnWI58O4Qa00qyqVK6irAH2nqpPRhax+dKhyO9PWyVNWo6grqQVEAQCCANtxgj+yzi5zGWZqjRUD6S6gAsqgRMggnpbfDnmAAkJA9hce3SZ74C9IMr5MzZGDEC4h0OIUKVMmtSeSCsBSQ0ep2PWfTFXjPCnrBa1NVqWCl1MMQoMFg29o+mG2pXBVEagX1gEuAEFxElRcNBvb2xpnOV7N4FbRqFlaYFrRcacctHvJx5mSc85lyVZwzsjIEQST2gQJ+HUZwU5pzy08ok6zTemhpqCAabIBBBGwuZ+WDYp18vCZlWqUpliF8QMbRqtIiO0WGFbnXM5B6K/u9VammppaiJ8gO5iI0yAJ9owSizvCyZQxBlbJ5JWiugaqQ0umpmiQZsbyYuQcTcN4grQoTQ+qCV63J2OwEkwO+LfLuXq0KyvToFUaQ4VVLgPtvYqAe9oMDphqo8l0Vp1TYtpZgSqiCQTaAIGBY3tLHT9SiNZF+8VlrKX1nvdlEb9x1nB7hNUEERIHwkdQd/+MIycTRmAWwj3n1n2wT4BxU0qzahqQiNO3qP74VjYo1mbPVY/Hw+Ub/6jXWN7dP1+WI0zRW4nEqDUqsLg9e3f2xDXp6byewHqcXrviebKlTRkv+oBp1rP2MYs0BTcSCflv9MBmTYTP9v+ceM+kSDfYX74cmUrsd4psQO42hv9xPQg/PGYFf6g3f8ALGYb4qehi/Df2nSNWM14iLTefoMLea52y6VHpSzPTbSyqIuN+uFMwUWTJhepx2gCVNQAgxcEX9ZAjE9WsCDJt6bYXM2lHNgsE0En/qAglotB77dewxDkOVzTkjMVSxFjq0xJnZRB+c4UcwEYFE5uePVhUNMVJRXbQGiIBJ67Y9zGeV3R0QyF85S5k9SOwMD54auLck5bxFLO4YvqYlhD3uDaBPYR1xvRpZXKsVoaUdmAY3JIJ28029OmKflmt+dXTSjeLlPINepqUi40nv0IM3g2jAXiOeLP4eYpamHlWpLAAdLzf2OOnZ/M0HH8SmDAidI8vqT0HSceZjlrJ1oLUyZUXEiR0IiJ6XH/AASOBtKeTOzGyYmck53xWRKiKyUfNJEFCxuxjvAHpAnD5muOLWqnKUyt01Fg34J0kDaD0nscA81+z3KKS6O9JhYEVD8/imf8YXszytmqWYXwaskqSajMEYKTtB+KehED1EYI1dysGUAbbgxp51z9KlSNIEL5YgQIA7dLD7Y5zwrJVQ2gOreIwFMT1J80zdd5wX5sydeplVzDhB4VmVg2tiXVDMjyqp2ucb8pCnRVRVa9cSDpBKkXHdiCDMiIA9MGxpLjCSPNNOI8v3NNqqSBcdp2ntsfpgTlDXpBoqBqakiJJIgkTB/Dbr6YbuCcnvVrvUZyEYwpPxEdDe/zMe2G3/0/l6dMp4d9zIkk/l6Y4JtctplZRTH9IhcmuAVqMRokCbXN9+se18O+V4kKvlADSGGjcaT9ve204HZblWk8keQz5YFt+o6g/LF08H8MmyqTJGkn/kYWwa9pLaXa+8ipZWlQcPUpIknUmlbQLRYYp8Z4WtSqWKLKwxuCp2i3Y2ttiXPcyUaloJC+UFj5rbz2M9MC24xSkAyQDtOEeJuRLuHphkGphvLByBqADysCbII/LptjStyuao0PSZSNQMfi7BTcRFvci+LXDcxRZw06QDJJMRivzBzotNKgpKCAp0MCUJb0i5vfcTBwzGb3k5sZTZR7yj+y/iqJTOW0r4i1XBgibT3Pw2F+/wBcHs5zetCr/wC4WrREGA6HzD00yD/SRMY5Dlc8UanUU+eZJnzFid/WZ398dE4DzF+9JSot4a1qb+Q1FkMYIO9gxBHv9sNyJqmXoA3H0jdl+YddNXSSjJqle1r/AHH2waTiMqIN4v1xz3Kl2rmnTCGnTYWNMEkC2nTZRFoEdFtgvxTK0UywqDx9YIqeRmlVmfMJuo+Ei8fLFbSd9JiBTLx3jhl83CgG8dThN4wMtmsyU8EK9MyHXy6iIJ1R8QAuJ2+eBP77Wem2Yo5oNSFtLi6kCYMDteQb9sEeUNLo1SoqaixIqxv0I7xbbvg1DUN5Hh2NowUaCqDYRpv7MYwSoVl1tRO5TadxsT9x9cCqNFGh1kT3sYHcH9XxY4bQUVBVk7mJMxMzAOxM3I3gTiGJBEmttpxKvlzTYrHmUlT1uLH8sT5DPyO7CwjqP8YL8xCcxXlFUJUdbfCo1Ej1kzgRwLgr1axhW8EAanABgOLRO5k/LDCvlubWDqCLB+cc+X+LF1FIvoWpZSIJVhMeWesRe98bZvO1KdQoxDaT2gHsR6EX+eAdHguYpVdIhiGDSrCDsRImxjofXF7iz1AyrVEFU0qYjUoLEbWkTBwt2ZVtTLOHCmTJ5wCCL7f3CVDMo52g9px7VpX2/K0/r7YXX4klNgszU3C/f6+mDPL9U1y6ghagpioFPWJ1Cem8dunXDEzOaBEyPxBcWNyMO/8AO0k8VltO1sZgx+40jdWCg3AEn579d/njMWLEp6vaNuUGtjewvHf/ABhT5y5QqVy2Yyw/jKNJWQpaJjzGIInqYIjti7R4+KTk7g7jBTI8XpsNSEGfiBNx6HaR2ODfci+IoCxOZcIr8QXVRdAjAwA6EEk2JBXcQfiUwZ3weTmpqAWk9KoXnTYhp3jcz8iBhxztFWmRpHS+53mcLebpUwzsrJqB8xgWPW/fFcpvtCraoAzXMlPMaWSnVZlMwZVZE7n4bG++4wC4j521lzq3Md/ngxxVkvcsO4FvucCmemJDIT6lo/KZGIOkRwwuq6iDCnA8zRzC6qhYgqQwBYAhfa/c2vGGWvxqjTVdRJZIVRBXfaJn2J3ttjn/AASo1IsylNBMm97gWj2wT4i4d2o5hmpfw1ZDHmLNGkQfcme0+mICiyDK+csoBHBjXxbMOFBgBjBIEXEbTseokHp2OFXjOTqO9N1cA6tMgQxpDdWEAW0kDtM42yi1tFVhT8QLGmxUkKCoYQfK4s0SB5InEXCVK0wzN5nNkY/CDsB0A2sNsF5TxE48bM+o8Sfi+d1qKZCGATpbaFv9oB94xvyzk1YLXYfEBGoCY/oPQdhgXl+LfxalJlUl/KCQJABIb3Fx+hibi/HioFCif4rgKgA+HoGPS0T8sENporub/SMvEeZxSIp0k8atuKa9PVjeB/e8b4E8T5jzdOoq1HpXI8tOwABuNREsZj7xi9yRypRpuKlM1WJOqpVqRLEGRB7T169emGbMCmuqqpLqQToVRf8AmkbQYsfliDZPljGZVFMN/wDUXsnzQW0JUqnW8q7DyhZsL7iZ0hhedN98HOFZR6SeG9RqsARqImDvBNzHqf7Y57zpwRaau1EEIQDF7AQw3v8AP198Wf2dcyU6dXRXZlVgNDEnTN9U+/8ANjtJ2hBFAGmzdmGc/kqJLmpSAYktqC+YiZWGUybdz374E8c5eePGy5DUzupMMpFiO2/fD3xfIF1/haWb4lnoLTfY26HvgNxDMMCodCrEE6TcadgQdj19RgGQXvLfTGmGgn5XE7hmWFQlHYo38pBmbWiN+s7YXuaFakxSW0ywVypXXBjUAelvv7Y6IufCiSiahYAL0ub9/nfEefyuVrGm9WmAdXmBUsh6qYmBNxYj1tjk0qZY6rxWX2nIaVSGESTh14VkhToU65eKjEH4h5Tq8oifi995HoMXVfJUHYJlypMyVVjY73Zj5enbElTmikqBEoEKNhKKB+f1w1t+JlDGytfeWuA5yo2YB8QtUquVAEXj4vQQAfN0jvghzNzCi1xllpFmQRrBkpUa+nbzqAfq3piflDILSnOVtCL4RdNLatKNDOSQAA0ACL7nFH/WneqzJTo02aCWFPzREglm3MGduuACirhJi1k6a/a54vCHUvUZ1o0HJqORaT1EDcxYADrgiOK0UpeFRQPBGgzFNR1uIJa+wkWicU8zw3xoWrVqaysk9Ao6g9o7CcSJwagKLMpOhIAgwY+t7/h3xDsBssI4dJ2l7heZs3iBb9ug9P8AOGPKICAFhRtK23626+uEejUpL5JbUY0wS152IMk+kEYMcO4sUKobneAZt1B7e3thTKGgtiJ3A3iVma+rMVpRKpao4AcWHmMsR32vvhh5YzaeHVSmJ0gX2nSQD0k/LCxxOvFSqpADM7FztuSYFtr4O8luzl0ohFcCR0PqQJvHX/uwQBuWyVx4yxH/ALzClTI6tLAkUz+ICdH/AHAbAnr+WNs7kqj09DKGZZFNp2Y+nUbT+eCeYBqU3VG8oEMWlT+Fpn5fy9TvGIMvxdGIsz+IQCoUnwzAAJEEjuSB2PUnBEWa7RA669iNvvOS1KVWnWbx0ZaoMkMCL9PSCDYi18OvKOQRqdWtUcI0aZJgim3VYvq3MWmcEeb+AAV1rzNMLDbnyj4Yn4jeI7RgbmKlBapUVQqo6FVj/qQZBN7R1EHbBVcouDrAXe/3hLNZVWYlQNNgthsBA+wxmCmRpmoi1FIhhIuPr89/njMTazVDYAK2+k1zdMN1HzJwIzmX0yQSbb9+4t0OBhzpcag+oEb9DiPJZh2qKpkgSRv0HXp23w1m+kxlW5ezHHqyq9JnbS0GncnSvUM0Tadt4Eb3x5l8yaqkW0hjo0rptA6XgzI+WBXHOJ/w3Ph6DsD7+mLnKuX8LKoTclS5J6liT9YIxWf4bl3pcX/L67TarTKAqbzgdmzDWk+n664Kpl2q6iCBpBZiZsB7YWeNuwIC/M+uFqDU2GVe53hfhfBKlYSkESZU+UgD3sRIHtOLmR4o1MqXXWFBUB0DEDax3Xpt2wk0uIZmkrrTqOquIcA2PX5Yg/1XML/8jfOP6jDtBPeZuhFYgixdzrI43Samy020SBKmBHtbv13xp++hVTxV8am8hUZVYTcsZMzBgCN5xzBOOVjYhW9SIP2P9MGeBcyI8UqwYBSXUAyNQgzf1G22OGNu87J4RWlG8bM6mVpUWqJSRhuoIEqS3mg7jfYHEXDcpRGYWvMrUUB1cA2UADr7W9AcK9bOMabKzSZlSek7/T+uLnJGUIRfOU1VG80xEWgTtt07+mIYEDmIxIbLDbY/oZ0nLVkK/wAPywNIljHpA6j5jriermBTUqsou3Un8WwHe3126YSuZ+JVMsEpMwYO4dKiwp0DdZEKw29PbDdwnjBqLFRVkRexAMfzbRfrfEq9HYSVV2XUwi/zEJJATQFVjc2O9lUfXCGmVVWuCFN4B99v5b465x/PUmXwwjFrjUAY2vc23B+nrhNbI0qoIgg9JNgf6dsS5N8zQ6YDRZWQct8x18sdKE1qK/EsQVmdu3XaR7Ye8jxPK55NJIYn8Jsy+3+MJNbgzKNVNTA203n9d8C81VAuV0sskx5TPr0+2OGQHZhJOFcnmum9R+8feJcqAlTTaws8mC3r6GLesYG5vlTMDS1NlYfh6RfrPpG3ri5Sy1elkRmBXd28MVCjJqABFxI80iZ1TEDbqKfAOcHqM3imksABSSQuokABj5ioPfuMQ2NeblY9VmCmmBA2hEcuq+WWhWpo7CQCfwg/ykC2Aacp5dcwtIE6tOkljYDsAZkwSem2CXEOaautqaoi6W0uzFmNu0CLi4vJnbGcJzAfMFmJaR0G3SZP5YhtqAlcAm2J+ktVuGOmXcCn41NNS6Jhoi7AD4iABA674Vc/k2dRVSVFNFQmQSQZ0MY6RAn0HthzXilehWFPw6VSlY6gTTa47QQ56CN7DcXh5h4OtZDXysLVW7p/Mv4hA33mOt+pv1EbcCFhyFGs7A/zeIyZqoog1FPaZkY8r8YZZOoRadOIOMUjrlFIpm6kx9N/1bFKV1DyhgbG9o9I/RxAB7y7l6hNB0cxgyPBaozC1IL0lKv4gBAOqIADXmTFxaCbxiWlxB8vXYV6YBdvI0nw2EAkq/4gZAPzG9sHOUKbMrAsPh0jUYuFMeW8Wm+FT9o/HBQo08iaatU0ajUJnQCRESLyFPW1sclttUzRmYsSx9pc5q4JS1fvNNpBXUyLDKbCCCPv/TC5kMyA6VjIUPsDfvb2xty3x5aVIqWs1ztt6TuLfniXNCSpZEpq4lYO/YgdiJ+2CMdgzebS5u50jhHFFNJv4kK9IsnltqWdXoNoC2H0t7mPDqUpNOimYj+GG0+YgA+Xy2awWOloOIeUY/d1RYEIfNpmCSTPrAn6HGuUz5pUiH0VWUEeFY6SslhB8oMjqd8cTsG9ZX6jFWQqOP5Us5BQaAdapYu413byhh8MFjb2MHcC+OX8x8DqUHnSfDaSh/lFgVP8txAnfDll+IGpUK0aS0dZHiAtpJggxtH4YvB82D1YrVRVdCvS3m0zIgjqP1frCC95b6fGcZtxx9vlAPLXEP8A21LVRJMXOtr3PecZi2vLQN1q6QbwGKgd7dL4zDNUk9Liv4jA/Ecsq/DAjpt/xihlaoWopuBsSD0Nr/ng9xRJJUC/p0+2AdbKaR5t/bDGHaZqgjeU+ZMsGcA/hFvfDHmKOmnSVVgBQAu9wI9L4AqivmEJJl2UR0Mbx3tvGGbN1A8EA6p+X/OKuVqAWaf4ePOWlTNeHQy+vX/EqEgoIsALAz6xgbw15I+Eg9jjbPZAOYJhFu7Wt8upON+B5RVqkXImxjcdD+u2EZCdM0mCCwxs8wvmuHKgEopHS3X+uBPHOWkqkkoFPQpZZPmsItbp6jDfn61NKWplYt+Eg2n1nfC7xvOlqQbX1sCIIJ9YtBGwH1wOCwOZiZidVic2zOQ8JnmTp6g9MDVzI16haDIwdz+YPmJi8zt1xQ4dyxVqp4sqin4NViw7gdvWfacaWMgizEMxsVCtZdcqukMWWAT8rdSMM+Ty66KdJmbRTaQQYOomSZ9z/TCpUKrUQxZYsDPw+vy64bMtmKLHRTqKTGqAZI9Y+YwjNqFVNXpFRiQ45hvLNqdndRUprT0RVAaekAbAbH3nvgSaL0mBohnpAghd9BFwvdlHSdhHUYtrlqj03NO2lRqOoEGT1HY7bGJxayuQVKOh6oNQkMugEgTuJj5/3wnUW3hY8S4MmhQSD39PYiV87xZ6qqzggpHSI1fTci2LHD8mzAMygKbLNrzuYjf1743WiZl6TOGEagCSg3kgDzLbY2wZagRTCawUkDURpiDPWPmIwQBjcnUKp0JQqQG3xE6SfNpgASLGB79B3wsccz1FtbTqMgFIlagAMSSJUgwZ+XtLxjm2gjNSCVXILICsFWKyDBJFvlhWp8QBGuoZUmTA6D4gItMgx0sMGt95n5GBBnXeR8+r5OiGMnRpvcmCVO2+OJ5hTRr1qNytOq601aDs0LPUyPzx0Ll7ifgZen5XVW1lC8AsJLTEzHmAv6YSK6q2drZlyCXcsgGwB6+8Ww/YoJV0Fjaxvy1QGn4lfQGAXUQsABRAsN4H1wU4ZS0MT1Jvhb5a8TNVvDWoqpB7gETdW3kt0NovhxyGXEmPwwTubG0TF4NvlhYIENrAqS8x8Oo5mgrVG0tSOpTE2/ENM+YwNvpucCctk6lOsjCu2vzaWJhTKygsDIBMHVe4E4LcZoFxToIwVmMqT9z6xiKploZUCl6tEhRptqBWdenY/DHuG33xxsNtK4fTvK3NnBVzFI1FC0q9vEUkQ9hJH+7Yg9QYN8c9paaNUUys6TDXgqw3Pr7Y6TxDUBqcEhAdQ7gSR7kGRbvhU5xp0c09OpPhVI0tB+JREAzsw6N6xe0Rwd+I7YEVLh4kKek0akyVZC26mQGA7j4iDbcYly/JtKsz5ipSFZ3N9ZIGokE6Vgrp3UEbR1vipkaWVasqKjEjUwMlgI+BdRnSJjubdZxby+fagtOrVcLULbkkKiBYgLOiAYO3X3xCv3EDIpO0O5LgFGvQSlmctSYUtS09IC6VPRWEMtx07Y59zFwgZetCJWFMRBqLADGbBxZu02Nja0nqvD+MJoFQwymdLKIBM39LxMDG+fpU6jA+V1qCGVrgj17EdD0nEFhXMLp38NwSLEUeRuJE6KbKhEOAzG99hvHcfPF7N5Pwc1VrEMWbSRAcCYA6wJm/Xpa+NszynToVENIEUrEknUytNiZ+JDYb2n6WeZNFRSWbS9FdZInzBuh3ja8TEDvglFIQZcfw8uRWHB5idxuvVSrrFSklizXkggG1hGokfWMNnLal8vTZjr8QGSTqgkkbm42+UYq8V4Tl200yrUqdVCW1Aale0EEzcSYB9bYtcJUUCtFSTTFhJve/TYGZ/VhHMa+p21LxXHyjAmQEXWT1vP364zF2nnBAvjMTraUfEyTmeU4h4jByCqNKh7QSOm8iJ36XxPxjKIQNDE6tmkQwgk3Fv0cCWpCqvmMgnUQLSdukEbEQe2J69IE2LaUvO8MNgosthtY7RiHyG5WtiKIg5UbdbmidcgaoIuLC+DgqavMpsTIjscBafMGZp1ClOmSukk+KhgSY9B1AjbpfE3CeNL4NOjs4kHyaB8RmIsY9MQ62Ll7ochVtPrIeOZoFmEXsesmZ6bR74u8tpLAAksdlHU/0HWcVM9kJBgjvbqJJN+19sScIIpAuUE2Aa4Ii9ri+FNp2uHm6bMzHIG34r27R3pimlJhUKuyEFvN36DbTeCF+5mcJvN1RFqlKbyhggb3AgxAJPe20x0xZ4jTVSGo1Dpb4/wDabaiSwJI9O8nrgKvFzWfTTVFAqGahBLMLzbp0774fW1VsJSCMKB5M9p8BoBf44NQmZI2B9BH+d8QZzMsgHgx4a+QgzYACIm4629sGOJ5eojooMWJaCPU2n4hFiTF5wFbNVNJeGKVH+RIswgW7X9MGAYxsXod4OamagLxY7RuI3B9f74Bf6madTUvxKTBHQ7f4x0DJcv1NHiuqprXUKYO4mAxmym026G+F7jHL6sW0oNe9rYNKN3CAyabXaoS4TzXRqrDMKbfiUmAfVT1Hobj74OcM5uy1KSa6k/h6geuENOBtRolzTZqmoCVayKdrf7pi+LvLXDKNem5AY1DOmDMHtEWt1vsdsLOFAdQuO/yT6NDAGdOynEQlM1jUlANZYt5dMd+x/rhN43z29aqBQd0pADcXdt9jsJ22P5YCcT4W6rpcaegO4gReOl+uKnD8g4ZVQo2owCrjzX2IJtsDBjAhAqne5W6jNkyDyrXyl3nOi3ippMal8Ty7gPcAnvGIuD8Nd2VFqFVJAGq4E9+w3tgrUyJeoA4OuFBU7iAAB9p+eDuUpUqVNnghiQFWdRPU/wBL9JGJD2Kmpg6UeEGYcgfeDee89URaNDUpFJDLgR10wP8AbCg+szhQylTxWCqff2GGnmLir5kKhoUxBsQJMnpfYdYxe5Q5UFJTWceYmQvaNvkN8ccihai1wMpBPEi4RkXp1kpo6o+jUdTQCd4g77bdsdB4D56QZhpLSRBkEGPXfbfHOuHZ1a3EaqGGCmBaxKsAN9iDF8dGyOXFMwF0xEjrPfEUbErdQwMWv2icX/d8xQ0WcKSDeVUmPkCV+cYlp86gtllEubq5ErDErouwEjcwLWwA/bYpTN5assnxKOiOh0OSR7+cX9cQcv5rL1AFqzTb17i2DyIQblHUKpuI58w8dD5YsabIxbSFYCSAd4Gx3se3TAShwalmaTinU80arwLAGRG/Y/PF3iXA0qFGFU1FBJ0zAMeouPrgHTq6qlQrRFI+ZFENpuZEbASN17T3wLNcguF3vaa8u8NqpWK0qvhSdLa4Nh2Xv8x1wU45wwVzVo1amplDN49lVj0je8wCB2wdpcLoKwYwpAuoIA1D26WwN4zxeiiwj3AiN5k2Pzm3UwYBxAstDbIumJ/DM/UpKlOlVqq5I1I8aZO5IYQI9fe+GvhXFm8dy+p1BvUCkqSIvC28wEwe4wJ5j4lSp5RalSiDXkLTIsRYyXgRA3v1+or8D4iGk6oQiGE7jtba+OYd4OOwZ0H/AFaUWqFImxWLADY+n+MUqWZRySR5gSLQPi2k9jcRt+eKOX4poVHBMCQTvYgDzffFSnn6TeN/FCMslZWzreFkAGSfpGwwCsQbMsYSBlA9dobr5/Uyo6rpUyv4oAkQCL+0ztjM5W1tqkQTb09fpfFLh9WnVJa+qJuYCgRI7k26e2CHDaCMQNQ0i59hvv1/vji9nbvNUIuPntJcxx3w20GTAHXuAe3rjMVa1JSSdQvj3B+NE+Eso8a4DRdyVaDO6EiI7x/XvgNXy9emDY1V9BpYfPY46lWyqRER+Y/uMAOM5N4OjQDtLAmfYDf64ecQPMxtc5tma8v8R1QfikNB97HFXhE1cwLkLTDGZ+L8MWsfinBt8j+85hssTT8RAXcrMhZFgJPnM94EyegMOS4H+6VyGYuCIn3gibWPthT+UESx0+7qfeXsxlygWRYnv0/tbGlekGB0EQvT72+mNs1VTQ4Zh5AWFtztv274rcLB1mAGEiIMdN/11GKxUmiJqZc1WveWOK8Qp0zQQH+G4/iAWJJHfsZj/wAfXFbMeAayeFSBJI1aQQgWFGlRAjYGLHfaYwTy/LYNTxK+lhMqnQGZE9wO22C9bOU6SjUYAsAAfoAJJxYRSRvM4uoYN6SvW4YaqeGFMf7ul5Nr+8++N8twCjSVQBqI6G4BPYf3nG1fihABtTWPie0+gHQ+/wBMVxxCFFekXrKLMyi6kiw0mIm23fB6gNhvBOUcmb5rLQSGDSLEHyj2PU/bFLM0lJ0fii0Rpg9o6x+WDvK3FFqMzVFUVlUEhmmL3+YttjzPcAoUKOpX8wuXMER9o9MLdmY1cr5suRl8vETOMcJNRigA841QJ8kAxP57+8EWXTl/3ZJpgqdNwTP1/OMPlagTl1qaD4is14IJBMqQD2BgdLGxwk8z1hq0Agk2AAMkx9fngkBEXhQrdybhHDa+fDVqlSUpU9TW9CbDYsSpnoI9hiJRDhgACAAsD4dNhvu3c9ZxU5d4r4ZalLKrjSSJgXFj6b/qcM37myUlZkUBzM2JMTHsLzHzx2QkbT0f4eisBfylThAMsXkkx9MG3zwggRLrpAA+EAm5PWf6DtibhehKfiEEEgqDA3m9iIIgge+B1DLE+cggE2Efh7D0xXa178zRch/IBxLPB+GhmBVSx7df8Y05i5teiz5elSl3QoHMrGoESgi4HfuDjynzIKNTwkkgrLFbEEiyjeYuI674sKprtqcy1NiKVOrCuSY28x0iDuT3xKoV35mXm6rEHKvwPrFvgmV8CqgYglvia92a5knczAx0ek8FWBJ2kzNhGw2E7YVeOZBTu2gzCxpfUw2HlaUn2we4Bn1YLTBL1IIIABgzYkg2vO+DFtuZT6rPgcjQf0k/7S+Brmcj4iE68vNRYEkiPOp66Son3Qe2OMUTUpFoQOp3BvHr3x9C8G4gjg6GDKT3mPft88LfEOUqNGoXUKKclgbDR1K+w3Hp7YeX8u8pooNj6TlicwVAZpTTAWCuskH5HbbBbhedzVQafHCCC0tAE+8e+Dx5fFcllQVDJ2G4B3AMHpt17YnzPKaaloSiuyFghO4ABMWgxP2OA1KeBGDphVkiop5/iLJ/+RWbz3S7EOLi5X4VBjpNzvEY3rUKVWkTSZnqQalVwCq01AsIO7TH3xtzFysaVF2OXY1A4Csl7Gbwu8CLRN8DuD5WoaLoCUmotJwRfz9TJG3b0GHKNrEr5MWk1DnJ5q5lTSNRCi9GJImJBIN5J9hjMrwSnWqadHgVC2mVYgbG8Rtb7jFblnh9bLZhiPPTJam0fiCzJidxvFzvhk4pSMK9JUCNoWSSCAzRrNriem8C8TOEOSGoQCKAMF1qL5anTXMOfBqEspBBkiAfQRO0gdcecx1qNGqGq0SzFVvTCiZkhj23iesHDdw7hdYZZkd2eoGDqSinxJJ8tyyiwBBEH1GM4xnKlfK008LTUqQrKSraSDeCN9o/8sEEvtGKWU2DRnPcvxt6VT+FqI7PBM+4398NvBuN61LsNBRgdAPx7RfSQIiYI74rDgFOmlPVSfU0jcbqwHXaRN8HMtwWnSAK0xZypaoATbtFowHhm7WaT9YTjq7PuJR1UT/8FRvUN/jpt8sZhiWof5vyxmO8A+sqfmMnrGUK2/l+mKedEByx8gBJ3Nhv698WcpwwoINao3vp/OL4kfhdMmSpJ9WP5bYtMrHgyuCogAIlOWppJYAsFWGg/DNpH/ltGE/mjIV3edHkLbXkDptsOp3x1Q0gJsAPS04HZrLyt9h0P+MB4XqZPi1wJxrjTVVcKqkqos5iwAuTNwOkmN8DMjzl+7qQU8Ryx80wIn0F/th856yBgQulW8pZR36fPvhEq8o6lZmYoQsrKgyfYHbAhVU0RObKx2uMb81O1P8A6YKsoIqKxgK8geoYEEX6jE3LWdlXVKgowQ8jzMzDcwTeB1Awh8OWtlwwYaQwgiNwd5t5umLtSq4GpkIBIH+0z2/XXEskSWa4y8eRUbWa1OsDdZsxnoy/hA3j/jFajn6rU9HiQrAAIqi/23t3nFrgvAjmcupP8PzQrQCWURcDcrBImRcLvg/l+S6VMBj4j3adbqIg2MKLjc/MWwpiqwfDbkcSlwvhjIop0qOt2jUWGkLPqbC/QSfTDPlOG6FmrDqpkb6VfuBu0byfoMXuFoSgVgQFEA3uPfbr0wrc98yJl6Zp0GV6wiAASq7bxaw7kYFbfiN2G085x4kisPONRHlGrcCZ+V5+QxzHiNYvVd56jrtbpG3fF7M5ivXVokGAzNGtiT9AP1GK3LfDC9YUnbyqC9Qr0UCSJ6yYE+uLCLQjEOpgJ5Qo+GhZrs4+2G3hnFRmKNMWVkPmAt7x9z7YAcaoSwJAWRZZ2XvjTh7eHMGxi3e/5i98LyCbXTHwyBOh8x5Sn4KaH0wBA3mRFiTCxc/M9cA8/wAcpGifMA6qEAWJqEWmOnWT6TjerramtZoawUTcgTBI6AQT98BeD5WkajKVGrVEkkkGe1hp/tvhaqDuZRzdbkHkXYgnfvMoZSsIcsUQmSouSNjfvGLGRQ+LrRtILBfNL3+oO15nrgtxQVdIqhlAR1BC2Mjuuw/LEmWpqKmupR/gu5iLbnYxYbffE6jK3hA7sbuC+IcTSnRdFQLVVqagnzAg6ySC20wLn64LcKpZl6NHMUlcuwLOwKE/iBO+1rDe4tgbzP4TVFenTKxPlJlTduhsI1GItgXwzilRGenqfQwmFFtRERew6wcSK4EqvhK7whSerTZa1Ko5vDNBBBMmL2IN/vh65T5oWuhpVY1kGxAhxJ2G3ywC5YyJoZfVmPMGt4fUiLSIMgiBI74FLpy9cVTOhSdYQ3KbSCImN7YJRtcSrMhoxvr8HOWQ1MsWZS0snba8dvTG1UJWNJzTRayEQTt1ET0vf698R1+Y1okeIdSuupXFwQdiYuD8oxLk+KUKogOjk3Am8e2Elt9proraAw4MsOpcoWRQ6zME7kFfmNMRuML+c4SzPD0yg8j+IAmmKR6w0pIPXoBhz8dGEkCdvl0xvTFMmxvhqk1zKx27RNzvBBRIZYqN4juoJ03dSNoMiDvOKgyNdxQaACqAXW4Mzpk7gQOnTrGGfN5kmsdVEeEpMPKiN5IvMbffFfJcSSpV0KrGmJBfTADdp9iN+4xNrdtyIOkk2IISkKVSm75hlYDw9AbUpB1AArFh5j1gYu8U4nTSotFUMgfzQoJ/3EEdO9rY3r5BGcMRDIZB0E+/p8/XFjMUkJMD5ST+eGEsSakEk1cGU8yfDiwqE+VVvaQbn2tIOCPisQFZpi5m+IGjpaNsaNU6deuJVSIwOCmmu/Pee1GMmCceYyD+v+cZibkaJ0Bak7fTqDjXV/MT7g2/xhc4bzMrwKkA/wA4/rGDiMrLIYHV6wDi0+JkNMJRx5kyC1MsvA6En6/8YpZ6jUVD4ahj+GTEf3GJTbqT6T/bfGyEEfD9AMKj5zrjPEKxqGlmUVVO6fhcfQtItcG0jBCvwujTphlFNARq81rfPzH6YcK+SSpAemrAGRrVWgjsIsfXGmYydOp5Xpob2kfkehwoY2Fm7gbgzm3EeB+KhZdLr3WCLb3woZvhtRa1IAlvDaUUmQCLjexg9PTHcqXA6KLpWmNJJOmTMnfc4r1OVsrUIbSQQe8Qf6Ykqa94an1iH/rdeg4zGZpL4beWVIBVYJk6SYEgmI6xbozcM41lq9NXBUgybGdIti7xPkrLVl0t4jD3kffAVuQsrQVgahVCDI1RPcW39uuEnFQswy/YcS7X4gaqfwmKqwM6Zki0AdgQZPv74SOP0FpXVBIM+53vhyyNTK0ENOk6KAsgmb+ktFx27YAZhFzLNKsUFvLABm1ze3tgC4ReZ1gm4ocYqECtXUV1YgGAmlYJgFosSR39d98bcnZ2nTpOzIdbuCXWIYLssEWAPbczawxd5k4fmRLGqxU2MGxIGx6THTEPDsoFoqp3NwD26R/fBjJ5dpZ6VAX1SDjNXxXeoNibDt2tbFbIK06j5Zt8sMGd4cURfEiGuIN4Fo9PpgHm8zJVEuQfpfr+umF2Wmn5VGq4d5Zps9KuwGpmJCz00iB7C33xX4Twmsja2IVgQdMfF3vhj4AMvRpgeNTFpMuOvU4sZ3PUVEhgwK6pAkR3ntbAajMqiTqMqfufiCIiRLT3Bv8AL+2LL02NMU58kXEC/viHLcYoNYVUnYXiZx7meOZdCUasgYbiZj6YBruGA7HyiVa+Qttb+mLWTyGWgAJpfT5yJk77jqJi/rjSvx+kxQCtS0qIMAsSZ9Nh64u0eIUNEr8cnzAGYtbaQOuI1RngZSPhP0lDiQcKDJ0qpQ7SVN4Jjv1jbFLhNCi1LxnLuZAVFI+IWIad+nywU4hxOmaZDx5yADBkH5d/XFTgmXgshQ+E3xQOsEDqL33/ANow/C4ujwZSz4cgb4TfpUwcOVnKCiKINOQo3kGRImFsxgC2+POVsvoruh30T/8AYYIZThOa8YZh9DAAjSDdhBAHYbzJOLfA+W3RjUqMAzGTckyfnAA2gf0wDAs1CWcWdlxaGFGzDv7nYEjpOJvAWCQNxa+3vj0PpAX4j69MRNV9ffD0x1zK7NchrFjaAqxvY39umK+RcoWOtjPSwH5CcTF9U9umKVQQd/sMN0DvIv0klTMR0P0xXzNXUBG3XEeYaTG5/LHlGmfcdcFUCa1Ktpj2xrl6RJ2knE1DLASzmBNumLWXVntRBA/mO2GphZvl6xT9SmPk7+k8/dD6fXGYtf6dT/FW83WO+Mw78qvr9jK3+Qb/AK/ec04VzDLaG3mAe/69cNPDOMMnwMb/AEOMxmLvTOci+beU+sQYjqTaM/DeZFMLUXbYjBvWGhl67MLfUYzGYrdTiVTtLPSZncbzz94MQRfa2PHcmxC/c4zGYqS/NYPXb9esjHiVAT0g+h6Y9xmOkTYVDv0/XqMBuZ+XhmQHRgtVR5SR5SJmGG/zFxPXbGYzAOLEkTn9TIVVqtTqLpYdFIIb0mbCPTptgnk0qeWmITSbLMyPcD9WxmMxSKAzpR49l6lN6jOpNOrpEgiUKiJCzB6Hfoe+BFJqgVWaOoVu4WwO8jvjMZjqAG01fw5ASbhPK5MkFyxfUJ80fFft0nAV+XlkkzqJvDEflbGYzDBOb4tPazPKmQPf64ibJGP84zGY4ximVquSMdMVK2TYXH54zGYGWsJozzL1CDg7wzOwR6YzGYTlAqbOJjUcOGt4ikwulBLEjoL7fi2wX4IlOupZWaFaNoBMA7TJsfTGYzHYt5ide5XKVENBitgJ+eKmcrGYIE/r0xmMxdQCZGTmaM8CZ95viGsw9sZjMFFGa+Jbc4p1JY2J+uMxmCWAZO2WCDUxkHfGgq6/LSWB6xjzGYv9PiQi6mX12d0YKp2k6ZJEM1SXbsP7nbB3K8NdwNRCJ0ROo9TjMZg85IAqB0qB2NwpTyVMAAItvQYzGYzFKzNTQvpP/9k=",
  },
];

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.container}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              innerIconStyle={{ borderColor: "lightgray", borderRadius: 0}}
              fillColor="green"
            />
            <View style={styles.foodInfo}>
              <Text style={styles.title}>{food.title}</Text>
              <Text style={styles.description}>{food.description}</Text>
              <Text style={styles.price}>{food.price}</Text>
            </View>
            <Image source={{ uri: food.image }} style={styles.image} />
          </View>
          <Divider width={0.5} style={styles.divider} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  foodInfo: {
    width: 200,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
  description: {},
  price: {},
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  divider: {
    marginHorizontal: 20,
  },
});
