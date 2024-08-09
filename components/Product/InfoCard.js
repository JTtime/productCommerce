// components/CustomCard.js

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const InfoCard= ({
  imageSource ="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUTERMVFhMXFxcWGRYXGRgXFxoWFxYbGBcdFhUZJCggGBsxHhUXITEhJiorLy4uFx8zODUxOSgtLisBCgoKDg0OGxAQGzAlICYtLS0yLS0vLTUtLS0vLS0tLzAvKzE3LTAvLTAvLS0tMi0tMi0tLS8tLS0tLy0tLS01L//AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABMEAABBAADBAUIBQcHDQAAAAABAAIDEQQSIQUxQVEGEyJhcQcUMoGRobHBI0JSkvAzVGJyk9HSQ4KissLT4RUWFyQlU2Nzg6Ozw/H/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQMCBAUG/8QANREAAgECBAIJAwMEAwEAAAAAAAECAxEEEiExQVEFYXGBkaGx0fATIsEy4fEUI0JSBhUzcv/aAAwDAQACEQMRAD8A7igCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAtTuIquaIhlt7jzU2IuzBmmeCachJkbJxDnB2c2QfcVBJnoAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDHxV6ULN8696EMsujf8AYb98/wAKkGBiMOeLQP55/gQGRsOMNMg1+qda7+SgklUAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBG7ekLIXytJBY0kDSie9VVpuFOUlwRbQpqpUjB8WaeOkeLcBTo7P6LeR+0dNy5C6Qry2t87zuf9Zhlvfx/Yt4fbeKe4tJb6mMv+k5o96U8fiJSy6eH7omp0bhoxvr4+yZtXRPM+ETPJzOzNI0Dew9zbAGvDmurh6kqlNSlvr6nFxVONOq4x209CcV5rhAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB45wAJJoDUk7gO9G7EpX0RoPSDb/AJy7q4zUAP3yDoT+jY0HdZ7uDjcb9T7Y/p9f2O9g8F9JZ5fq9PnHwI19WBXD8fIrnXZvq+5bfHd89w8e+9TyRavrMr2JTYW23wHW3QuNubvLSeLefeOPcupg8W46PVHPxmDVTVaS9TfoZWuaHNILSLBG4grtJpq6OA04uzK1JAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQGkdNdtZnebMNNH5QjWzwb4cT+L4/SOJf8A5R7/AG9ztdHYWy+rJa8PcgcKKbv10Hq/AC417s6skevb9IK1sad9+Kzyt2t3dYT+3Upe2nUOdae5YpOMrGSd43PYBTyPXw4//aV0VafmYSs4E70c2l5vN1LvyMhsXuY91bu4kgEDiQftLq4WuoSyPZ+vzz7zlYvD/UhnW6818+bG8LqnGCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgI3pFtMYfDvk+tuaObzu8efqVOIq/TpuRfhqP1qih8scyhad7iSScxJ4nXX8c15aTcm5M9UkkrIk8Dh87mt3WeJI79/q4c9x3KzD0VUmosprVMkW/nz5oX5cGeuDK1JcDodwDS7sGwLzbt3aGp0W3Kk8yilbV+C6tUr8OpopjWX08/DT8217vJ9Zh7QFP5Gt1l1cqcdSN2tnxO4amIVp327ffj59vBbNHWPz0/j8uidgBY4AUczT4gg61evaJ3e2llNRSjKK5oQbeaL6vnkSW1cJmwwdysHiK3O3+G7/ArbnFukpL5zNSlO1VxNn6JbTM0FPNyxHq3nnQ7LvWPeCurhav1Ia7rRnIxtBUqn27PVexNrZNMIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgNC8oeMLpooAdGjrD4nQX4VfrXI6Uq7QXadvomlpKo+whaBeaFDfx+a49tjqrRGVhnU8drIT9bQV7SO7SwrqOkrXtfjyK6ivHa/V8uZcOO+na91mnG7BFtIYBYNmrAJ363rVEbyrp1VLezafkvXz42NeVD+04rl79n8cLkdtI/SE+scd+tX9ar414c+dXsqjad9X3dXd5G3QX2JFU77wzRxa8HhVEG9OOpF1xGu/W2Tvh11P5+/XuYxjau+tfP26tuqb87Y7CsB1oceBAqwTqRvPGrHLXd+pGVFXNH6Uo1218+efpg9D8X1eNDL7MrSwjhmjssN+DXD+cmBqZauXmreBl0jSzUM3J37nv5nRF2jzwQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAcs25MH7SmJugQwdxaA3keRXnsc71n2o9Ngo5cPG3aexs7Tjeh7/bfvWpxepsX0SKJ30eO7h76UN5WZxV0YzZO1d89aPy33389eKhye/P5waMmtCqY67/gfgoqO70JirIofJ2a/d+6/fxRP7bDL91y6yc0Bw5a0dd9DjVD1d6mM2lYhwV7lvD4jJPG+6yyscfDOL9yuw82qsX1ldeClSkup+h15eoPIBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEByZw/16c3r18w43Qe4j1ae5eZxD/vS7X+T1VL/AMI//MfRF+NwDn8NR6zXD3aKq+5ZZ2RYxJ7WvKvxfjaqnuWwWhjj1/JRwM+JVe/f7eHfz4KAUya1uH4+KlDYqr8cvXxUMGLjLo1vvT5KyF+BHadpXrjxQQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAcw2lDk2hMP083325/X6S83jFavJdf4PTYWWbDRfV6aHkI7b++j7NP3e1a8dy9/pRjYj0iVXLcuhsWQ1OBlfU9N/Ac/D5aLEk8fvHw196khHoCgkpjhzyxMH1pGN+84D5q/DrNUS616lVaWWEnyT9DsC9WeOCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDSeneEayWOcHtO7BH6uoPy9i43StNLLUXZ+TtdFVHJSpvbc19szXakhp76ojiCCQuStTrZXHS1y1M4XvB8PmoaM4lNEXod3Ll3qckrbE3T2ZRnHgR8b93+CxsZAP1/cFNmGtCrNpuPsKOL5EaE50IwQlxRkd/JAEDm59gH1AO9ZHJdLoykpTcnw/JzOlarhSUF/l6I6Eu8edCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDlm2ZZX4qQz3mDnNaDoGtB7Ib3VRvjdrzGOnUlVefh6HqcHCnGksnLzAhZQNeu/8ABUqCaLs8r2LEuUbgCPb4fBYNWM43PBK06ZW+PaJvwzV7kvpa3r72Jy21v6exasKNTM9Y8A2QD3G69dKVo7tXIa0si+/EtIrq4m946y/e4/BZOd/8V5+7MFTad8zfh7IsQTSska/Dn6WwGgal1mspaN4PI+PIq3DznCd4bmNaEJxaqbcTrzd2u9epPHnqAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDivSfpHW0cSyUaskDAWhxOVrRl3abjfrVFToqOIlnbfc1+UbFPpWeHjkSVl1P3EHSDB1TpJG/wDTv+yi6AVtG/GPsZf9/K92o+EvcyhtvZh9LES/s3fAMWMugL8X4x9jKP8AyBrhHwl7l7/LWySK86k0FC4ZjXsYi6B0tr4oyXT2t7LzKf8AK2yPzub9jKPeY1Wv+Pv/AGfjEzfTz/1XmeDbWyQb66Z3cYyB/UCtj0Ak7u774lcv+QStZWXdL3MbGdJ8D9TPX/LHzFq2XQil1d8fYpXTs1y8Je5FO6SsD2GLMHB7S01WuYUq10LClLMm7rrXsWPpupUi4tRs9Nn7ne1eagQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAfOXlGjrbOMH6cZ+9h4nfNdDDLRGrXdiFBI37luLc05JNXN+xGHwEeCgM7cO0vwsMoy5/OXTOebc+uz1Ja113ro7uWpmquTy33fZ/Js5KaisyWy7TLg6NxMxWJE+HaIX4vCR4ax2XtfK50oi17Terq+FCuBrCVZ5Y2etnczjRjmd1xViM6O7EyS404jDsYGMJiOMZKyGuuy3zc2iBYveOayqTuo5X4bmMKdnLMtOF9i9hoNmSSYpzIiYsK44huXN9PEY2tdE7ObDeuotJFZCRWpKlyqpJN6vTs+Ii1J3aWi1NHldrdBpJJpugF8G2Sa4arc4GotWWoIiZ4he+WMe14WtWWhsU3qfVC5Z0AgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA+evKjFl2ziT9oQu/wCwxv8AZW/hpaI1MQWti7Jhfh3z4gyZGSdWGxi3lxDdTodO032HwOp0hjsRCvDD4ZRztZrzva2vK2uj+aqcJh6cqcqlRuydtPnWTmO6M4WOJ75nzBkRjjBY4Oc5rwHAlrgchtx7I03niAORhum8diJQp0IwcpxlL7r2TjK1k01daaN66q70be1WwdCknOo2kuX79vAx4ujURexjpsTmawSMogNYwkZQw5SGnVu4jddDRZVem8RaVSEIZc2TW97rd2utN+GnN6lkMBT0i5Sva/V48y+7o9FIRF5ziTiHYfrWh7szK5E16Jc0aXplB1R9OYqF6rpQ+lGo6baupdq1tonrzvZWKpYKm/szvM436jFi6LxAZXST9YYBK/LTYiHahodlObWjV613LKXTeIlNyjGGT6mRXvm0dm2rq1/LrM6fR8MtpN3tfTb0L+M6MYeKN2aR4mbGZQ4uiERcAaYI/wApw0Pz0U4fpzF168clNOm55bJTzpf7OX6O1b9XEpqYCnTg7y+61+Fuy2/l38DXejuzusxkNmmtkiJOm/rWhrR36+xp7l2sdiPppc27IowVL6jbeyV/bzPpRaZthAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBwTysR/7Yk744j/AEa+S26D0NWuRezdozYcEwvy24WKDgaaeBB18OSjG4HD4xKNeN7batPxVvYpoV6lG7g7X+fOJOy7G2hIXQB4mbMRMXggsc4UAS4tBZQDdN1VW9czC4no6MY1oQyygnBR1zLVtrLe2+7fa2jbrYfEuTg3eMtb8OG7/C34bMlcJ0cx8bRE7aEEbR2Qzsvo1o23C6HLhpQXPxFbo+pVdaVFOTe7nbv0bV+fPXXnt06GJUFGM3ov9b+bszExuw9pQkYiN7ZsjOqD4MjyIxrRZl11PAErepVOjq1J05QtGUs7u3Zy55lJ2245UalWjiqdTNe7tbazt2Nel2RGB6Qtjw7WAyuc2Pq2scWFjTxIPp5eAG6gAK1KrrdGTq4p1GoJOWZtXzPqa/Td8Xxet+BfTxkadHKr3tazta/O++nLutxLY21iDH1Jktha5moaXZcpFZiLO7fv71vrozCKv/UKFpXvo3a/O17fjqNH+qrOm6belrddu0xtgYB0mOw1aNGIgc4nUdmYEDvdw7u0d1q/E1oQtm3ei7zPCUZzu1stWfRioNkIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgON+UgmLa4mb1T/omNMTsrjXaBJYeBvR3AjlvwnFVoui21xTV9+3bue5jKTpP6is+DXV2fkijsh85bJHD1UL30crmva2rDqboQOOU1xrSgsamPhhoSjUqKU4razi3pdc9+a070yqnhpV5JwhaLfNNLnyt2M37BYRmHwjI4AA52Ygk9tzCSSQfqkk7hv4DgvMYyp9dfUk/ulq775dopbq3Ve8rc2dzDUlB5V+mPr18/wAdhB4KMFz7B9LSuFcweFFwWvOWWK7PM6GZko6R7CXMc5pJF06vRzAWONHT1KijVlDZ8jHLGatJfNCExWyIsWZX9W0YrJ2aJja9w4n6ubuNXz4jvYPG1IWje0bpvThxtqrfGlfR8zF4KLjmSu7fxf38dCF2Vs8535sK+ZzbFZnsDSAbzZQCXd191cV2MXiUorLWjBPi7N25q7t5Pv2OPQpPW9Nt9tl36fnkY+xYI/O8Jnmc2sThy2MNcQ53XMy2boagcP3qyvKSn9sO/Tb1Jw2Vx1n3a/wfQCkvCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDkHlGgA2sJJY3Pi6mMEB2XUF+8gEjeOXisJVL/24StLx8n+/YVVIW++Ubx27/nYWthRxZpJcuQdloZYce0HXTiP0ALrdY4rl9M1ZqnTpP7tW+K22va/PhbW2xt9DU1KrOcI2slbW9ufLu/JsOIAeyI3vblaCN/bAGU6A6ke6zwXAqfdbsS5JWvfV8Fx3tzetu3S+1y0438vnsWtn3nJOU0SbNncAKzGt98/qlRUmst97W56/tb8IhrSxKSwg2bG8hpvQHLZGY8aA5b/ABVUYvLmT0vpy8ee2js+Wt0q1K2nzciYIHB+bNRoa6jcdBXq8fgr5SjJWb8b6Pt/K8OBmmrWtoYHSnDMy+cAuEr3ujdlPYJa05hIBoOyARw01s9pdzo3FValoTSa1fWmuS21vfdbnFx9CFO843T07/mpCbMwEnnWFla1j2ecwAmg7KDM0XRqiLB0utOWu/LFU5T+m21K605+6ZRQoTUc8bNfO9NHdFtGQQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAcb8psRO1baHX1Mbc1aXb6A5nXUeCwc7Ss2a+Ig2rpPt4dSXWZpc/qOqMYiy5SGggkiiHFwGt5gN+tnXcvOYy2dSzuerT5J8Eltda36rHd6Kk03GUVHTRXu+3+esz9kMbJhDGADKxzaDiW5beRVgih2hoOA4la9Rp3i7K2t+rXN6rwN2q3Crm/xd9uz5/B5gXEWHHQEjQCibFajeNHb739y05uOV2W6Xv8AEZSS4E156AzLdkku1A0oWMvdXrslZ08U4wcOe/zlbhz1NV0ryuReGLe0M1NAsaXd/A7gBWuvqrqOK4/OvlyutNtEtS5X00MfFAOgnztzMb9IGgkEu4uD22RW+9b1XRwTq6ZGk78r76PS6/Pc0auPjD6f3K+nZtqahsPCMfjMMTJle3EYcljmgElsrTQN67vEeC70q0ozScdG9Gtd+fL0PP4WnCavntJcGt7cnfXwud6W4bQQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAcq6e4KR+0y9h1ZFHlaPSzDMd+la9/A+B5+LxFKm8s+O99rfP3EsPVnHPB7bJb3MbAR4qObrHR5i62OeXNc4NNag3u0GlVQriuXXxGFlRyUZ5cuqSulfw87rfcnC08TTrKc4Xvo27XS8durqJHZ0L4pWPBB1OYgFwyk6gje49w7t657qwUlZ7W29Fe2605anpJzhUpuPgZkOAJaZI9WaOcNzm0ASC3iD7Rx3a1um5ptLZa67L8rr8bMq+sk8st9lyfeXIpzROhPC+Otae0+FqiDale/7p7/OD2EorYx8BnF5Q6q3uFBwG679vdryVs5yTtCTXYw8tvuPSyoaifkne/UkZhGGl2uXcQQNRr6Y30tqEsOlGU1fmvL2duKRr4n6lS8YO2mjt87LmnYHZEzMbhszRQxMBsOblpszdRx+Hgu/RxlCbSjL1PNxwWJjO7jpe+6+fNjuq6JuBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBwvypdLJ8Ntd7ImxECKI9tribIvg4LSxOApYh/e33W9mX068oKyNePlHxpHo4bl+Tf8A3i010FhVxl4r2M/6qp1GcemW04pGwy4WMPfRbGYpmyPzOytydvWyCAQDuSXQWGeqcr9q9iVi59RP7F8oscTzFjYZcLIDROr2g0CQ6gHtNObplNWLWlieh68WpUJXt3P28zNYmMv1Ik9u+UjAwNyxkTv3/QZcuuvbl9H7tkcQsMP0fia9PJOKgubVn4Lfq2QlWindO5pU3lQxRB6qCBjR9vPId/2gWD3Lfp9B0U7zk2+qy9/UreJk9jBZ5RMbmPZw/H6knI/8RWPoXDPjLxXsP6up1F3Y/TjFS43DNe2GnYiBpyteDRlaNCXnmrKXRdCk04t6da9iJYmbVnY+k10jWCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAID5m8sMhO3MSD9UQtHh1DHfF5QlGpP9GuaA7HHt/CPmw0mdj5sI6COJzbcwQSxQjEPkcOLerxIaDxdGRvFiCNdPs6eUGV8csRxe0XSkvlLWRTh88EjQ01HZaxpe2tdDqNAMCBmyHtjc/wA2Y/JgJJBnkaM/WObj2Nbm4RhhDRvJJbZQEgyTZPUxQyGDqW4vGkFpflcXWcMXyA9uPKGAuvQsY0kAOCA0LpIYBij5s1rYy1lhjzIzO5gL8rzws7gXAEEAkUhJibFNYzDHliIP/K1AfXiEBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB8v+VJ+bbeMN/XjGv6MEY+SEo1s14oDbvJdtA4fGS4jeI8NK4tzAZzbCGCyLccrgAgZtU+EwjcBjsFhJoTG/EYZ/WCVkYLZcQ15a15zfRx4fqLdlcAS80dQhBh4vozgoRMIZGgvwWMbl62KT6aKVmRrC/W3N7VjKTlBGWyEBZ6X4DDxbLOHw0rDFHjWSteZRI6SN+BoSZW7g6UlgygAEeJQHOL4FCRBJkkY8nRj2OO/c1wcdPUgPsVCAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA+bulPRPES4/EyGRnWPmecr7bQLuwLbm0y5a0GlLFSi3ZNXM3CaV3F25208TC/0f4/6rI3/AKsjR/XyrPKytTTLR6A7T/NT+1w5/wDYoMrof5gbT/M3ffg/jQXKh5PNqfmbv2kH8aC5U3ydbU/Na7zLh/7y0Fz13QDHD0hE3xkv+qCpysjOi07oNN6MksTSdKbmdv0HpZVi5RW7RnGE5fpi33H01syB0cETHG3MjY0nmWtAJ9oUmBkoAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgOItxLpsRI97iS951dprppQvduA8F5vENzm827Z6yilCmlFbGxYaGMDtEj9VpB9ub5LKKhBbvuv7mE3OXBPt/gt4mdgvJLLpXE998R+CsKlWztGcvF+5MKCf6oR8F7GO/GyD+VlB/WeP7Sr+vU4Tl4v3LVh6L/wAI+C9i07aEv++fuv03H2671H1av+8vFmSw9H/ReCPWYl5Osj9LJok6Df6u9T9WfGT8WHSpraC8EVuniLe017uXb+INqc1OX6k33+5jlqRf2NLuIfa00ZBDWUPG9PYFcnFrRWMMs1q5XOxbAkc7CQOfecwxl178xYCb9a79JtwTfJHmK6SqyS2u/Uz1mVBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAaDt7oW8TOmwwDmvcXlmgc1xNnLehF2a4cFycXgpt5qevUdrB9IQUVCrpbiRz8NMwdqKQcNWu5cNKIWg6dWOmVruZ0I1qUtpLxRHzObett8QtecbO70NmMr7allzmfaCwuuZnqeNc0a5hoRv1HrHqU3IfI9ZlcdDZ7gTv8AALKMXLYhyy7mbHsuRwtsUpG7Rjv3e9bEcNNq6T8GUSxNOO8l4okdndCJZXh2I7Eea3Am3PF3VDdfEk33cVvUMFNv79F5mhX6RpxVqer8kdGaABQ0AXXOCeoAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgKDE37I9gSxN2BE37I9gUWQuytSQEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAf/Z",
  normalText = "Minute Maid Minute Paid Pulpy Orange Juice Ready to Serve",
  boldText = "250 g",
  buttonText = "Add",
  additionalText = "$24",
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.upperSection}>
        <Text style={styles.normalText}>{normalText}</Text>
        <Image source={{ uri: imageSource }} style={styles.image} />
      </View>

      {/* Lower Section */}
      <View style={styles.lowerSection}>
        <Text style={styles.boldText}>{boldText}</Text>

        <View style={styles.lowerRightSection}>
          <Text style={styles.boldText}>{additionalText}</Text>

          <TouchableOpacity style={styles.button}>
          <Icon name="add-circle-outline" size={20}  />
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    width:'90%'
  },
  upperSection: {
    padding:6,
    paddingBottom:20,
    backgroundColor:'#f1efef',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  normalText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  lowerSection: {
    padding:6,
    paddingTop:10,
    backgroundColor:'#f1efef',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boldText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  lowerRightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap:5,
    justifyContent: "space-between",
  },
  icon: {
    color: "#007BFF",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    width:70,
    height:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  
  },
  buttonText: {
    color: "green",
    fontSize: 16,
  },
});

export default InfoCard;
