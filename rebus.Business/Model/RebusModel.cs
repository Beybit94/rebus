using System;
using System.Collections.Generic;
using System.Text;
using rebus.Business.Validation;
using rebus.Business.Validation.CustomAttributes;

namespace rebus.Business.Model
{
    public class RebusModel : Model
    {
        [RequiredObject]
        public string Img { get; set; }

        [RequiredObject]
        public string Answer { get; set; }

        public override ModelValidationResult Validate()
        {
            var result = new ModelValidator<RebusModel>().Validate(this);
            return result;
        }
    }
}
