window.Yikes_Mailchimp_Ajax=window.Yikes_Mailchimp_Ajax||{},function(e,i,s,a,r){"use strict";function t(e,i){void 0!==e&&s.each(e,function(e,a){!0===i?s("span."+e+"-label").length>0?s("span."+e+"-label").addClass("yikes-mc-required-field-not-filled"):s("."+e+"-label").addClass("yikes-mc-required-field-not-filled"):s('label[for="'+e+'"]').children("input").addClass("yikes-mc-required-field-not-filled")})}a.l10n=e.yikes_mailchimp_ajax||{},s(i).ready(function(){s("body").on("submit",".yikes-easy-mc-form",function(){var i=s(this);i.addClass("yikes-mc-submitted-form-loading"),i.find("input, label, button").not(":hidden").fadeTo("fast",.5),"string"==typeof a.l10n.preloader_url&&a.l10n.preloader_url.length>1&&i.append('<img src="'+a.l10n.preloader_url+'" class="yikes-mailchimp-preloader" />'),s(".yikes-mc-required-field-not-filled").removeClass("yikes-mc-required-field-not-filled"),s(".yikes-mailchimp-submit-button-span-text").hide(),"string"==typeof a.l10n.loading_dots&&a.l10n.loading_dots.length>1&&i.find(".yikes-easy-mc-submit-button").append('<img src="'+a.l10n.loading_dots+'" class="loading-dots yikes-mc-loading-dots" />');var r=i.attr("data-attr-form-id"),n=[];if(i.find(".yikes-interest-group-required").length>0&&i.find(".yikes-interest-group-required").each(function(){var e=jQuery(this).attr("name").replace("[]","");0==i.find('input[name="'+e+'[]"]:checked').length&&(n[e]=i.find("span."+e+"-label").text())}),n.length>0){if(i.find(".yikes-mailchimp-required-interest-group-error").length>0)i.find(".yikes-mailchimp-required-interest-group-error").fadeOut("fast",function(){for(var e in i.find(".yikes-mailchimp-required-interest-group-error").remove(),n)i.find("span."+e+"-label").after('<p class="yikes-mailchimp-required-interest-group-error">'+a.l10n.interest_group_checkbox_error+"</p>")});else for(var o in n)i.find("span."+o+"-label").after('<p class="yikes-mailchimp-required-interest-group-error">'+a.l10n.interest_group_checkbox_error+"</p>");return i.find(".yikes-easy-mc-submit-button").removeAttr("disabled","disabled"),i.find("input, label, button").not(":hidden").fadeTo("fast",1),i.find(".yikes-mailchimp-preloader").remove(),s(".yikes-mc-loading-dots").remove(),s(".yikes-mailchimp-submit-button-span-text").show(),i.removeClass("yikes-mc-submitted-form-loading"),!1}i.find(".yikes-easy-mc-submit-button").attr("disabled","disabled"),s(".yikes-easy-mc-error-message").remove(),s(".yikes-easy-mc-success-message").remove();var c={action:"process_form_submission",form_data:i.serialize(),form_id:r,page_data:a.l10n.page_data,ajax_security_nonce:a.l10n.ajax_security_nonce};return void 0!==e.yikesGoogleRecaptchaV3?yikesRecaptchaV3(function(){return s.ajax({url:a.l10n.ajax_url,type:"POST",data:c,success:function(e,n,o){if(i.find("input, label, button").not(":hidden").fadeTo("fast",1),i.find(".yikes-mailchimp-preloader").remove(),s(".yikes-mc-loading-dots").remove(),s(".yikes-mailchimp-submit-button-span-text").show(),i.removeClass("yikes-mc-submitted-form-loading"),i.trigger("yikes_mailchimp_ajax_submission",e),e.success){e=e.data,"function"==typeof yikes_mailchimp_google_analytics_success&&yikes_mailchimp_google_analytics_success(e),1==e.hide&&(s(".yikes-easy-mc-form-description-"+r).length>0&&s(".yikes-easy-mc-form-description-"+r).hide(),i.hide());var c='<p class="yikes-easy-mc-success-message yikes-easy-mc-success-message-'+r+' yikes-easy-mc-hidden">'+e.response+"</p>",m=s(".yikes-easy-mc-form-description-"+r).length>0?s(".yikes-easy-mc-form-description-"+r):i;"before"===a.l10n.feedback_message_placement?m.before(c):"after"===a.l10n.feedback_message_placement?i.after(c):"both"===a.l10n.feedback_message_placement&&(m.before(c),i.after(c)),s(".yikes-easy-mc-success-message-"+r).fadeIn(),s(".yikes-mailchimp-required-interest-group-error").remove(),1===e.redirection&&yikes_mc_redirect_after_submission(e.redirect,e.redirect_timer,e.new_window),i.trigger("yikes_clear_input_fields_after_successful_submission"),i.find("input").not('.yikes-easy-mc-submit-button, input[type="radio"], input[type="select"], input[type="checkbox"], input[name="yikes-mailchimp-associated-list-id"], input[name="yikes-mailchimp-submitted-form"]').val("");var l={action:"increase_submission_count",form_id:r};s.ajax({url:a.l10n.ajax_url,type:"POST",data:l,success:function(e,i,s){},error:function(e,i,s){console.error(s)}})}else{e=e.data,"function"==typeof yikes_mailchimp_google_analytics_failure&&yikes_mailchimp_google_analytics_failure(e);var d=void 0!==e&&void 0!==e.response?e.response:"Error collecting the API response.",f='<p class="yikes-easy-mc-error-message yikes-easy-mc-error-message-'+r+' yikes-easy-mc-hidden">'+d+"</p>",u=s(".yikes-easy-mc-form-description-"+r).length>0?s(".yikes-easy-mc-form-description-"+r):i;if("before"===a.l10n.feedback_message_placement?u.before(f):"after"===a.l10n.feedback_message_placement?i.after(f):"both"===a.l10n.feedback_message_placement&&(u.before(f),i.after(f)),void 0!==e&&void 0!==e.missing_required_field&&!0===e.missing_required_field)if(void 0!==e.missing_required_field_data)t(e.missing_required_field_data,void 0!==e.is_interest_group&&e.is_interest_group);s(".yikes-easy-mc-error-message").fadeIn()}},error:function(e,i,s){console.error(s),console.log(e),console.log(i)},complete:function(e,s){i.find(".yikes-easy-mc-submit-button").removeAttr("disabled","disabled")}})}):s.ajax({url:a.l10n.ajax_url,type:"POST",data:c,success:function(e,n,o){if(i.find("input, label, button").not(":hidden").fadeTo("fast",1),i.find(".yikes-mailchimp-preloader").remove(),s(".yikes-mc-loading-dots").remove(),s(".yikes-mailchimp-submit-button-span-text").show(),i.removeClass("yikes-mc-submitted-form-loading"),i.trigger("yikes_mailchimp_ajax_submission",e),e.success){e=e.data,"function"==typeof yikes_mailchimp_google_analytics_success&&yikes_mailchimp_google_analytics_success(e),1==e.hide&&(s(".yikes-easy-mc-form-description-"+r).length>0&&s(".yikes-easy-mc-form-description-"+r).hide(),i.hide());var c='<p class="yikes-easy-mc-success-message yikes-easy-mc-success-message-'+r+' yikes-easy-mc-hidden">'+e.response+"</p>",m=s(".yikes-easy-mc-form-description-"+r).length>0?s(".yikes-easy-mc-form-description-"+r):i;"before"===a.l10n.feedback_message_placement?m.before(c):"after"===a.l10n.feedback_message_placement?i.after(c):"both"===a.l10n.feedback_message_placement&&(m.before(c),i.after(c)),s(".yikes-easy-mc-success-message-"+r).fadeIn(),s(".yikes-mailchimp-required-interest-group-error").remove(),1===e.redirection&&yikes_mc_redirect_after_submission(e.redirect,e.redirect_timer,e.new_window),i.trigger("yikes_clear_input_fields_after_successful_submission"),i.find("input").not('.yikes-easy-mc-submit-button, input[type="radio"], input[type="select"], input[type="checkbox"], input[name="yikes-mailchimp-associated-list-id"], input[name="yikes-mailchimp-submitted-form"]').val("");var l={action:"increase_submission_count",form_id:r};s.ajax({url:a.l10n.ajax_url,type:"POST",data:l,success:function(e,i,s){},error:function(e,i,s){console.error(s)}})}else{e=e.data,"function"==typeof yikes_mailchimp_google_analytics_failure&&yikes_mailchimp_google_analytics_failure(e);var d=void 0!==e&&void 0!==e.response?e.response:"Error collecting the API response.",f='<p class="yikes-easy-mc-error-message yikes-easy-mc-error-message-'+r+' yikes-easy-mc-hidden">'+d+"</p>",u=s(".yikes-easy-mc-form-description-"+r).length>0?s(".yikes-easy-mc-form-description-"+r):i;if("before"===a.l10n.feedback_message_placement?u.before(f):"after"===a.l10n.feedback_message_placement?i.after(f):"both"===a.l10n.feedback_message_placement&&(u.before(f),i.after(f)),void 0!==e&&void 0!==e.missing_required_field&&!0===e.missing_required_field)if(void 0!==e.missing_required_field_data)t(e.missing_required_field_data,void 0!==e.is_interest_group&&e.is_interest_group);s(".yikes-easy-mc-error-message").fadeIn()}},error:function(e,i,s){console.error(s),console.log(e),console.log(i)},complete:function(e,s){i.find(".yikes-easy-mc-submit-button").removeAttr("disabled","disabled")}}),!1})})}(window,document,jQuery,Yikes_Mailchimp_Ajax);