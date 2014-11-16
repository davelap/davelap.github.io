/*
 * @copyright
 */
jQuery.sap.declare("sap.m.ObjectHeaderRenderer");jQuery.sap.require("sap.ui.core.IconPool");sap.m.ObjectHeaderRenderer={};
sap.m.ObjectHeaderRenderer._isEmptyObject=function(o){if(!o){return true}if((!o._isEmpty||!o._isEmpty())&&(!o.getVisible||o.getVisible())){return false}return true};
sap.m.ObjectHeaderRenderer._isEmptyArray=function(a){if(a){for(var i=0;i<a.length;i++){if(!sap.m.ObjectHeaderRenderer._isEmptyObject(a[i])){return false}}}return true};
sap.m.ObjectHeaderRenderer._isEmptyRow=function(l,r){return sap.m.ObjectHeaderRenderer._isEmptyObject(l)&&sap.m.ObjectHeaderRenderer._isEmptyArray(r)};
sap.m.ObjectHeaderRenderer._renderObjects=function(r,o){for(var i=0;i<o.length;i++){if(o[i]instanceof sap.ui.core.Control){r.renderControl(o[i])}}};
sap.m.ObjectHeaderRenderer._getIcons=function(o){var i=[];if(o.getShowMarkers()){o._oFavIcon.setVisible(o.getMarkFavorite());o._oFlagIcon.setVisible(o.getMarkFlagged());i.push(o._oPlaceholderIcon);i.push(o._oFavIcon);i.push(o._oFlagIcon)}return i};
sap.m.ObjectHeaderRenderer.renderAttribute=function(r,o,a,f){r.write("<div");r.addClass("sapMOHAttr");r.writeClasses();if(f){r.addStyle("width","100%");r.writeStyles()}r.write(">");r.renderControl(a);r.write("</div>")};
sap.m.ObjectHeaderRenderer.renderRow=function(r,o,l,R){if(sap.m.ObjectHeaderRenderer._isEmptyRow(l,R)){return}r.write("<div");r.addClass("sapMOHAttrRow");r.writeClasses();r.write(">");if(!sap.m.ObjectHeaderRenderer._isEmptyObject(l)){this.renderAttribute(r,o,l,sap.m.ObjectHeaderRenderer._isEmptyArray(R))}else if(sap.m.ObjectHeaderRenderer._isEmptyObject(l)&&!sap.m.ObjectHeaderRenderer._isEmptyArray(R)){if(R[0]instanceof sap.m.ProgressIndicator){r.write("<div");r.addClass("sapMOHAttr");r.writeClasses();r.write(">");r.write("</div>")}}if(!sap.m.ObjectHeaderRenderer._isEmptyArray(R)){r.write("<div");if(R[0]instanceof sap.m.ProgressIndicator){r.addClass("sapMOHStatusFixedWidth")}else if(R[0]instanceof sap.ui.core.Icon){r.addClass("sapMOHStatusFixedWidth");r.addClass("sapMObjStatusMarker")}else{r.addClass("sapMOHStatus")}r.writeClasses();r.write(">");sap.m.ObjectHeaderRenderer._renderObjects(r,R);r.write("</div>")}r.write("</div>")};
sap.m.ObjectHeaderRenderer.renderAttributesAndStatuses=function(r,o){var a=o.getAttributes();var v=[];for(var i=0;i<a.length;i++){if(a[i].getVisible()){v.push(a[i])}else{r.cleanupControlWithoutRendering(a[i])}}var A=v.length;var I=[];var b=sap.m.ObjectHeaderRenderer._getIcons(o);if(!o.getResponsive()&&!sap.m.ObjectHeaderRenderer._isEmptyArray(b)){I.push(b)}if(o.getFirstStatus()){I.push([o.getFirstStatus()])}if(o.getSecondStatus()){I.push([o.getSecondStatus()])}if(o.getStatuses()){var s=o.getStatuses();for(var i=0;i<s.length;i++){if(!s[i].getVisible||s[i].getVisible()){if(s[i]instanceof sap.m.ObjectStatus||s[i]instanceof sap.m.ProgressIndicator){I.push([s[i]])}else{jQuery.sap.log.warning("Only sap.m.ObjectStatus or sap.m.ProgressIndicator are allowed in \"sap.m.ObjectHeader.statuses\" aggregation."+" Current object is "+s[i].constructor.getMetadata().getName()+" with id \""+s[i].getId()+"\"")}}else{r.cleanupControlWithoutRendering(s[i])}}}var c=I.length;var n=A>c?A:c;if(o.getResponsive()){this.renderRowResponsive(r,o,v,I)}else{for(var i=0;i<n;i++){this.renderRow(r,o,v[i],I[i])}}};
sap.m.ObjectHeaderRenderer.renderNumber=function(r,o){if(o.getNumber()){r.write("<div");r.writeAttribute("id",o.getId()+"-numberdiv");r.addClass("sapMOHNumberDiv");r.writeClasses();r.write(">");r.write("<span");r.writeAttribute("id",o.getId()+"-number");r.addClass("sapMOHNumber");r.addClass("sapMOHNumberState"+o.getNumberState());r.writeClasses();r.write(">");r.writeEscaped(o.getNumber());r.write("</span>");if(o.getNumberUnit()){r.write("<span");r.writeAttribute("id",o.getId()+"-numberUnit");r.addClass("sapMOHNumberUnit");r.addClass("sapMOHNumberState"+o.getNumberState());r.writeClasses();r.write(">");r.writeEscaped(o.getNumberUnit());r.write("</span>")}r.write("</div>")}};
sap.m.ObjectHeaderRenderer.renderTitle=function(r,o){o._oTitleArrowIcon.setVisible(o.getShowTitleSelector());if(o.getShowTitleSelector()&&o._oTitleArrowIcon.getVisible()){r.write("<div");r.addClass("sapMOHTitleAndArrow");r.writeClasses();r.write(">")}if(o.getTitle()){o._titleText.setText(o.getTitle());r.write("<span");r.writeAttribute("id",o.getId()+"-title");r.addClass("sapMOHTitle");if(o.getTitleActive()){r.addClass("sapMOHTitleActive")}if(o.getShowTitleSelector()){r.addClass("sapMOHTitleFollowArrow")}r.writeClasses();r.write(">");if(!o.getResponsive()){o._titleText.addStyleClass("sapMOHTitle")}r.renderControl(o._titleText);r.write("</span>")}if(o.getShowTitleSelector()){r.write("<span");r.addClass("sapMOHTitleArrow");r.writeClasses();r.write(">");r.renderControl(o._oTitleArrowIcon);r.write("</span>")}if(o.getShowTitleSelector()&&o._oTitleArrowIcon.getVisible()){r.write("</div>")}};
sap.m.ObjectHeaderRenderer.renderFullTitle=function(r,o){if(!o.getNumber()){r.addClass("sapMOHTitleDivFull")}};
sap.m.ObjectHeaderRenderer.renderFullOH=function(r,o){if(o.getIntro()){r.write("<div");r.addClass("sapMOHIntro");if(o.getIntroActive()){r.addClass("sapMOHIntroActive")}r.writeClasses();r.write(">");r.write("<span");r.writeAttribute("id",o.getId()+"-intro");r.write(">");r.writeEscaped(o.getIntro());r.write("</span>");r.write("</div>")}r.write("<div");r.addClass("sapMOHTopRow");r.writeClasses();r.write(">");r.write("<div");r.writeAttribute("id",o.getId()+"-titlediv");r.addClass("sapMOHTitleDiv");if(o._hasIcon()){r.addClass("sapMOHTitleIcon")}this.renderFullTitle(r,o);r.writeClasses();r.write(">");if(o._hasIcon()){r.write("<div");r.addClass("sapMOHIcon");if(o.getIconActive()){r.addClass("sapMPointer")}r.writeClasses();r.write(">");r.renderControl(o._getImageControl());r.write("</div>")}this.renderTitle(r,o);r.write("</div>");this.renderNumber(r,o);r.write("<div class=\"sapMOHDivider\"/>");r.write("</div>");if(o._hasBottomContent()){r.write("<div");r.addClass("sapMOHBottomRow");r.writeClasses();r.write(">");this.renderAttributesAndStatuses(r,o);r.write("<div class=\"sapMOHDivider\"/>");r.write("</div>")}};
sap.m.ObjectHeaderRenderer.renderCondensedOH=function(r,o){r.write("<div");r.writeAttribute("id",o.getId()+"-titlediv");r.addClass("sapMOHTitleDiv");this.renderFullTitle(r,o);r.writeClasses();r.write(">");this.renderTitle(r,o);r.write("</div>");this.renderNumber(r,o);var f=o.getAttributes()[0];if(f&&!f._isEmpty()){this.renderAttribute(r,o,f)}};
sap.m.ObjectHeaderRenderer.render=function(r,o){if(!o.getVisible()){return}if(o.getResponsive()){this.renderResponsive(r,o);return}var c=o.getCondensed();r.write("<div");r.writeControlData(o);r.addClass("sapMOH");if(c){r.addClass("sapMOHC");r.addClass("sapMOHBg"+o.getBackgroundDesign())}r.writeClasses();var t=o.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");if(c){this.renderCondensedOH(r,o)}else{this.renderFullOH(r,o)}r.write("<div class=\"sapMOHLastDivider\"/>");r.write("</div>")};
sap.m.ObjectHeaderRenderer.renderResponsive=function(r,c){var C,t=true,m=this.hasResponsiveMarkers(c),s=this.hasResponsiveStates(c),T=this.hasResponsiveTabs(c),h=c.getHeaderContainer(),S=!(sap.ui.Device.os.name==="Android"&&sap.ui.Device.os.version<4.4&&sap.ui.Device.browser.name==="an"&&sap.ui.Device.browser.version<4.4);if(!c.getVisible()){return}C=c.getCondensed();r.write('<div class="sapMOHROuter"');r.writeControlData(c);r.write(">");r.write("<div");r.addClass("sapMOH");r.addClass("sapMOHR");if(!S){r.addClass("sapMOHNoCalc")}if(c.getHeaderContainer()instanceof sap.m.IconTabBar){r.addClass("sapMOHWithITB")}r.addClass("sapMOHBg"+c.getBackgroundDesign());if(C){r.addClass("sapMOHC")}if(c._iCountVisAttrStat<=2){r.addClass("sapMOHStatesTwoOrLess")}else if(c._iCountVisAttrStat<=4){r.addClass("sapMOHStatesThreeOrFour")}else{r.addClass("sapMOHStatesFiveOrMore")}if(!m){r.addClass("sapMOHNoMarkers")}if(!T){r.addClass("sapMOHNoTabs")}if(c._iCountVisTabs>7){r.addClass("sapMOHTabsMoreThanSeven")}r.writeClasses();var a=c.getTooltip_AsString();if(a){r.writeAttributeEscaped("title",a)}r.write(">");if(m){this.renderResponsiveMarkers(r,c,t,m,s,T)}this.renderResponsiveTitle(r,c,t,m,s,T);if(s){this.renderResponsiveStates(r,c,t,m,s,T)}if(T){this.renderResponsiveTabs(r,c,t,m,s,T)}r.write("</div>");if(h&&h instanceof sap.m.IconTabBar){r.renderControl(h)}r.write("</div>")};
sap.m.ObjectHeaderRenderer.renderResponsiveTitle=function(r,c,t,m,s,T){r.write("<div");r.writeAttribute("id",c.getId()+"-titlediv");r.addClass("sapMOHTitleDiv");if(!T){r.addClass("sapMOHTitleDivNoTabs")}if(!s){r.addClass("sapMOHTitleDivNoStates")}if(c._hasIcon()){r.addClass("sapMOHTitleIcon")}if(!c.getNumber()){r.addClass("sapMOHTitleDivFull")}r.writeClasses();r.write(">");if(!c.getNumber()){r.addClass("sapMOHTitleDivFull")}c._titleText.setMaxLines(2);this.renderTitleResponsive(r,c);if(c._hasIcon()){r.write("<div");r.addClass("sapMOHIcon");if(c.getIconActive()){r.addClass("sapMPointer")}r.writeClasses();r.write(">");r.renderControl(c._getImageControl());r.write("</div>")}this.renderResponsiveNumber(r,c);r.write("</div>")};
sap.m.ObjectHeaderRenderer.hasResponsiveMarkers=function(c){return(c.getShowMarkers()&&(c.getMarkFavorite()||c.getMarkFlagged()))};
sap.m.ObjectHeaderRenderer.renderResponsiveMarkers=function(r,c){var I=[],i=0;if(c.getShowMarkers()){c._oFavIcon.setVisible(c.getMarkFavorite());c._oFlagIcon.setVisible(c.getMarkFlagged());I.push(c._oFavIcon);I.push(c._oFlagIcon);r.write("<div class=\"sapMObjStatusMarker\">");for(;i<I.length;i++){r.renderControl(I[i])}r.write("</div>")}};
sap.m.ObjectHeaderRenderer.renderResponsiveNumber=function(r,c){var o=c.getAggregation("_objectNumber");if(o&&o.getNumber()){o.toggleStyleClass("sapMObjectNumberFull",!c.getTitle());r.renderControl(o)}};
sap.m.ObjectHeaderRenderer.hasResponsiveStates=function(c){var a=c.getAttributes();var v=[];if(!(c._hasAttributes()||c._hasStatus())){c._iCountVisAttrStat=0;return false}for(var i=0;i<a.length;i++){if(a[i].getVisible()){v.push(a[i])}}var I=[];var b=sap.m.ObjectHeaderRenderer._getIcons(c);if(!c.getResponsive()&&!sap.m.ObjectHeaderRenderer._isEmptyArray(b)){I.push(b)}if(c.getFirstStatus()&&c.getFirstStatus().getVisible()){I.push([c.getFirstStatus()])}if(c.getSecondStatus()&&c.getSecondStatus().getVisible()){I.push([c.getSecondStatus()])}var s=c.getStatuses();for(var i=0;i<s.length;i++){if(!s[i].getVisible||s[i].getVisible()){if(s[i]instanceof sap.m.ObjectStatus||s[i]instanceof sap.m.ProgressIndicator){I.push([s[i]])}else{jQuery.sap.log.warning("Only sap.m.ObjectStatus or sap.m.ProgressIndicator are allowed in \"sap.m.ObjectHeader.statuses\" aggregation."+" Current object is "+s[i].constructor.getMetadata().getName()+" with id \""+s[i].getId()+"\"")}}}c._iCountVisAttrStat=v.length+I.length;return!!(v.length+I.length)};
sap.m.ObjectHeaderRenderer.renderResponsiveStates=function(r,c,t,m,s,T){r.write("<div");r.addClass("sapMOHStates");if(!T){r.addClass("sapMOHStatesNoTabs")}r.writeClasses();r.write("\">");this.renderAttributesAndStatuses(r,c);r.write("</div>")};
sap.m.ObjectHeaderRenderer.hasResponsiveTabs=function(c){var h=c.getHeaderContainer(),i;if(h){if(h instanceof sap.m.IconTabBar){i=h._getIconTabHeader();if(i.getVisible()){c._iCountVisTabs=i.getItems().length;return!!i.getItems().length}}else if(sap.suite&&sap.suite.ui&&sap.suite.ui.commons&&h instanceof sap.suite.ui.commons.HeaderContainer){return!!h.getItems().length}}return false};
sap.m.ObjectHeaderRenderer.renderResponsiveTabs=function(r,c,t,m,s,T){var h=c.getHeaderContainer(),i;r.write("<div class=\"sapMOHTabs"+(h instanceof sap.m.IconTabBar?" sapmMOHTabsITB":"")+(!s?" sapMOHTabsNoStates":"")+"\">");if(h){if(h instanceof sap.m.IconTabBar){i=h._getIconTabHeader();r.renderControl(i);h._bHideHeader=true}else if(sap.suite&&sap.suite.ui&&sap.suite.ui.commons&&h instanceof sap.suite.ui.commons.HeaderContainer){r.renderControl(h)}else{console.log("The control "+h+" is not supported for aggregation \"headerContainer\"")}}r.write("</div>")};
sap.m.ObjectHeaderRenderer.renderRowResponsive=function(r,o,v,I){var V=v.concat(I),c=v.length,C=V.length;if(C===0){return}r.write("<div");r.addClass("sapMOHStatesFirstCont");r.writeClasses();r.write(">");if(c>=1){this.renderAttribute(r,o,V[0])}else{this.renderStatus(r,o,V[0])}if(C>=2){if(c>=2){this.renderAttribute(r,o,V[1])}else{this.renderStatus(r,o,V[1])}}var i=2;if(C>4){for(;i<C/2;i++){if(c>i){this.renderAttribute(r,o,V[i])}else{this.renderStatus(r,o,V[i])}}}r.write("</div>");if(C===2){return}r.write("<div");r.addClass("sapMOHStatesSecondCont");r.writeClasses();r.write(">");for(;i<C;i++){if(c>i){this.renderAttribute(r,o,V[i])}else{this.renderStatus(r,o,V[i])}}r.write("</div>")};
sap.m.ObjectHeaderRenderer.renderStatus=function(r,o,s,f){r.write("<div");r.addClass("sapMOHStatus");r.writeClasses();if(f){r.addStyle("width","100%");r.writeStyles()}r.write(">");r.renderControl(s[0]);r.write("</div>")};
sap.m.ObjectHeaderRenderer.renderTitleResponsive=function(r,o){o._oTitleArrowIcon.setVisible(o.getShowTitleSelector());if(o.getShowTitleSelector()&&o._oTitleArrowIcon.getVisible()){r.write("<div");r.addClass("sapMOHTitleAndArrow");r.writeClasses();r.write(">")}if(o.getTitle()){o._titleText.setText(o.getTitle());r.write("<div");r.writeAttribute("id",o.getId()+"-title");r.addClass("sapMOHTitle");r.addClass("sapMOHRTitleNoWordBreak");if(o.getTitleActive()){r.addClass("sapMOHTitleActive")}if(o.getShowTitleSelector()){r.addClass("sapMOHTitleFollowArrow")}r.writeClasses();r.write(">");if(!o.getResponsive()){o._titleText.addStyleClass("sapMOHTitle")}r.renderControl(o._titleText);if(o.getShowTitleSelector()){r.write("<span");r.addClass("sapMOHTitleArrow");r.writeClasses();r.write(">");r.renderControl(o._oTitleArrowIcon);r.write("</span>")}if(o.getIntro()){r.write("<div");r.addClass("sapMOHIntro");if(o.getIntroActive()){r.addClass("sapMOHIntroActive")}r.writeClasses();r.write(">");r.write("<span");r.writeAttribute("id",o.getId()+"-intro");r.write(">");r.writeEscaped(o.getIntro());r.write("</span>");r.write("</div>")}r.write("</div>")}if(o.getShowTitleSelector()&&o._oTitleArrowIcon.getVisible()){r.write("</div>")}};